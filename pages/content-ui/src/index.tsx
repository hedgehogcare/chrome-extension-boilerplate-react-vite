import { createRoot } from 'react-dom/client';
import App from '@src/App';
// @ts-expect-error Because file doesn't exist before build
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { injectGlobal } from '@emotion/css';

const CONTAINER_ID = 'chrome-extension-boilerplate-react-vite-content-view-root';

const TrendingSelector = 'div[data-testid="sidebarColumn"] section[aria-labelledby][role="regions"]';
const ExplorerPageSidebarSelector = 'div[data-testid="sidebarColumn"] div[aria-label]';
const SearchListSelector = 'div[data-testid="sidebarColumn"] div[aria-label] > div > div:first-child > div:first-child';

function waitForElement(selector: string, timeout = 10000): Promise<Element> {
  return new Promise((resolve, reject) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(selector));
    }, timeout);
  });
}

async function setup() {
  const existingRoot = document.getElementById(CONTAINER_ID);
  if (existingRoot) return;

  injectGlobal({
    [TrendingSelector]: { visibility: 'hidden' },
    [SearchListSelector]: { zIndex: 100 },
  });

  const root = document.createElement('div');
  root.id = CONTAINER_ID;

  try {
    const body = document.querySelector('body');
    const theme = body?.style.backgroundColor === 'rgb(0, 0, 0)' ? 'dark' : 'light';

    if (window.location.pathname === '/explore') {
      const explorerSidebar = await waitForElement(ExplorerPageSidebarSelector);
      const parent = explorerSidebar.parentElement;
      if (!parent) throw new Error('Explorer sidebar parent not found');
      parent.insertBefore(root, parent.firstChild);
    } else {
      const trending = await waitForElement(TrendingSelector);
      const parent = trending.parentElement;
      if (!parent) throw new Error('Trending parent not found');
      parent.replaceWith(root);
    }

    const rootIntoShadow = document.createElement('div');
    rootIntoShadow.id = 'shadow-root';
    rootIntoShadow.style.paddingTop = '12px';
    const shadowRoot = root.attachShadow({ mode: 'open' });

    if (navigator.userAgent.includes('Firefox')) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = tailwindcssOutput;
      shadowRoot.appendChild(styleElement);
    } else {
      const globalStyleSheet = new CSSStyleSheet();
      globalStyleSheet.replaceSync(tailwindcssOutput);
      shadowRoot.adoptedStyleSheets = [globalStyleSheet];
    }

    shadowRoot.appendChild(rootIntoShadow);
    createRoot(rootIntoShadow).render(<App theme={theme} />);
  } catch (err) {
    chrome.runtime.sendMessage({
      type: 'SLACK_ALERT',
      text: '⚠️ DOM 警告, 无法定位目标元素: ' + (err as Error).message + ' cc <@U06QFLV3YJY>',
    });
  }
}

function initPageWatcher() {
  let lastPath = location.pathname;

  const checkURLChange = () => {
    if (location.pathname !== lastPath) {
      console.log('URL changed:', lastPath, '->', location.pathname);
      lastPath = location.pathname;
      setup();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded - First Load');
      lastPath = location.pathname;
      setup();
    });
  } else {
    console.log('Already loaded - First Load');
    lastPath = location.pathname;
    setup();
  }

  window.addEventListener('popstate', () => {
    console.log('popstate detected');
    checkURLChange();
  });

  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    console.log('pushState detected');
    checkURLChange();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    console.log('replaceState detected');
    checkURLChange();
  };

  const observer = new MutationObserver(() => {
    checkURLChange();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

initPageWatcher();

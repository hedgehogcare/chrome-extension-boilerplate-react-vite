import { createRoot } from 'react-dom/client';
import App from '@src/App';
// @ts-expect-error Because file doesn't exist before build
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { injectGlobal } from '@emotion/css';

const CONTAINER_ID = 'chrome-extension-boilerplate-react-vite-content-view-root';

const TrendingSelector = 'div[data-testid="sidebarColumn"] section[aria-labelledby][role="region"]';

const ExplorerPageSidebarSelector = 'div[data-testid="sidebarColumn"] div[aria-label]';

const SearchListSelector = 'div[data-testid="sidebarColumn"] div[aria-label] > div > div:first-child';

function setup() {
  const existingRoot = document.getElementById(CONTAINER_ID);
  if (existingRoot) {
    return;
  }

  injectGlobal({
    [TrendingSelector]: { visibility: 'hidden' },
    [SearchListSelector]: { zIndex: 100 },
  });

  const root = document.createElement('div');
  root.id = CONTAINER_ID;

  const interval = setInterval(() => {
    const trending: HTMLElement | null | undefined = document.querySelector(TrendingSelector)?.parentElement;
    const explorerPageSidebar: HTMLElement | null | undefined =
      document.querySelector(ExplorerPageSidebarSelector)?.parentElement;

    const body: HTMLElement | null = document.querySelector('body');
    const theme = 'rgb(0, 0, 0)' === body?.style.backgroundColor ? 'dark' : 'light';

    if (window.location.pathname === '/explore' && explorerPageSidebar) {
      clearInterval(interval);
      explorerPageSidebar?.insertBefore(root, explorerPageSidebar.firstChild);

      const rootIntoShadow = document.createElement('div');
      rootIntoShadow.style.paddingTop = '12px';
      rootIntoShadow.id = 'shadow-root';
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
    } else if (trending) {
      clearInterval(interval);

      trending.replaceWith(root);

      const rootIntoShadow = document.createElement('div');
      rootIntoShadow.id = 'shadow-root';
      const shadowRoot = root.attachShadow({ mode: 'open' });
      rootIntoShadow.style.marginBottom = '16px';
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
    }
  }, 500);
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

import { createRoot } from 'react-dom/client';
import App from '@src/App';
// @ts-expect-error Because file doesn't exist before build
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { injectGlobal } from '@emotion/css';

const CONTAINER_ID = 'chrome-extension-boilerplate-react-vite-content-view-root';

const TodaySelector = 'div[data-testid="sidebarColumn"] [aria-label][tabindex] [data-testid="news_sidebar"]';
const ExplorePageSelectorZH = '[aria-label="推荐关注"]';
const ExplorePageSelectorKorean = '[aria-label="팔로우 추천"]';
const TrendingSelector = 'div[data-testid="sidebarColumn"] [aria-label][tabindex] [role="region"] [aria-label]';
const SearchListSelector = 'div[data-testid="sidebarColumn"] div[aria-label] > div > div:first-child > div:first-child';

function waitForElement(
  selector: string,
  timeout = 10000,
  fn: (selector: string) => Element | null | undefined,
): Promise<Element> {
  return new Promise((resolve, reject) => {
    const el = fn(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = fn(selector);
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
  const lang = document.documentElement.getAttribute('lang');

  if (existingRoot) {
    return;
  }

  injectGlobal({
    [SearchListSelector]: { zIndex: 100 },
  });

  const root = document.createElement('div');
  root.id = CONTAINER_ID;

  try {
    const rootIntoShadow = document.createElement('div');
    rootIntoShadow.id = 'shadow-root';
    const shadowRoot = root.attachShadow({ mode: 'open' });
    let theme: string;
    if (['/explore'].includes(window.location.pathname)) {
      if (lang === 'zh' || lang === 'ko') {
        const explorerSidebar = await waitForElement(
          lang === 'zh' ? ExplorePageSelectorZH : ExplorePageSelectorKorean,
          10000,
          (x: string) => document.querySelector(x)?.parentElement?.parentElement,
        );

        const parent = explorerSidebar.parentElement;
        if (!parent || !parent.firstChild?.nextSibling) throw new Error('Explorer sidebar parent not found');
        parent.insertBefore(root, parent.firstChild?.nextSibling);
      } else {
        const topsSelector = lang === 'en' ? TodaySelector : TrendingSelector;
        const trending = await waitForElement(
          topsSelector,
          10000,
          (x: string) => document.querySelector(x)?.parentElement,
        );

        if (!trending) throw new Error('Trending not found');
        if (trending.parentElement) {
          trending.parentElement.style.border = 'none';
        }
        trending.replaceWith(root);
      }

      const body = document.querySelector('body');
      const html = document.documentElement;

      const colorTheme = html?.style?.['colorScheme' as unknown as number];

      theme = body?.style.backgroundColor
        ? body?.style.backgroundColor === 'rgb(255, 255, 255)'
          ? 'light'
          : body?.style.backgroundColor === 'rgb(21, 32, 43)'
            ? 'dim'
            : 'dark'
        : colorTheme;
    } else {
      const topsSelector = lang === 'en' ? TodaySelector : TrendingSelector;
      const trending = await waitForElement(
        topsSelector,
        10000,
        (x: string) => document.querySelector(x)?.parentElement,
      );

      if (!trending) throw new Error('Trending not found');
      if (trending.parentElement) {
        trending.parentElement.style.border = 'none';
      }

      const body = document.querySelector('body');
      const html = document.documentElement;
      const colorTheme = html?.style?.['colorScheme' as unknown as number];

      theme = body?.style.backgroundColor
        ? body?.style.backgroundColor === 'rgb(255, 255, 255)'
          ? 'light'
          : body?.style.backgroundColor === 'rgb(21, 32, 43)'
            ? 'dim'
            : 'dark'
        : colorTheme;

      trending.replaceWith(root);
    }

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

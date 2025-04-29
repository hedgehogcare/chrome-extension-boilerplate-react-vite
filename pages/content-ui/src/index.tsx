import { createRoot } from 'react-dom/client';
import App from '@src/App';
// @ts-expect-error Because file doesn't exist before build
import tailwindcssOutput from '../dist/tailwind-output.css?inline';

const CONTAINER_ID = 'chrome-extension-boilerplate-react-vite-content-view-root';

function setup() {
  const existingRoot = document.getElementById(CONTAINER_ID);
  if (existingRoot) {
    console.log('Already injected, skip.');
    return;
  }

  const root = document.createElement('div');
  root.id = CONTAINER_ID;

  const interval = setInterval(() => {
    const trending: HTMLElement | null = document.querySelector(
      'div[data-testid="sidebarColumn"] section[aria-labelledby][role="region"]',
    );
    if (trending) {
      clearInterval(interval);

      trending.style.transition = 'all 0.5s ease';
      trending.style.transform = 'scale(0.5) rotate(-20deg)';
      trending.style.opacity = '0';

      trending.addEventListener('transitionend', function handleOldTransition() {
        trending.removeEventListener('transitionend', handleOldTransition);

        trending.replaceWith(root);

        root.style.transition = 'all 1s ease';
        root.style.transform = 'scale(1.2) rotate(10deg)';
        root.style.opacity = '0';

        requestAnimationFrame(() => {
          root.style.transform = 'scale(1) rotate(0deg)';
          root.style.opacity = '1';
        });

        root.addEventListener('transitionend', function handleNewTransition() {
          root.removeEventListener('transitionend', handleNewTransition);
        });

        const rootIntoShadow = document.createElement('div');
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
        createRoot(rootIntoShadow).render(<App />);
      });
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

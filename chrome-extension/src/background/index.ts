import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://tops.chainbase.com/' });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'FETCH_USER') {
    fetch(`https://api.chainbase.com/tops/v1/stories?lang=${message.lang}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(err => sendResponse({ error: err.message }));

    return true;
  }

  if (message.type === 'SLACK_ALERT' && message.text) {
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message.text,
      }),
    })
      .then(() => sendResponse({ ok: true }))
      .catch(err => sendResponse({ ok: false, error: err.message }));

    // 关键：保持异步响应通道
    return true;
  }

  return true;
});

console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

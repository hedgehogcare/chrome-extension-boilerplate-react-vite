import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://trench-cb.vercel.app/' });
});

console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

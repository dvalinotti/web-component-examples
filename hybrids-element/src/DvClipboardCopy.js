import { html, property } from "hybrids";
import { copyTextToClipboard } from './utils'

function handleClick(host) {
  copyTextToClipboard(host.text)
    .then(() => {
      window.alert('Copied text to clipboard!');
    })
    .catch(() => {
      window.alert('Failed to copy text to clipboard.');
    });
}

export default {
  text: property('text'),
  render: ({ text }) => html`
    <div class="clipboard-copy">
      <input type="text" class="clipboard-copy-input" value=${text} readonly>
      <button class="clipboard-copy-button" onclick="${handleClick}">
        Copy
      </button>
    </div>
  `
};

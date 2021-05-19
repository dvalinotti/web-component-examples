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
  `.style(`
    .clipboard-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid lightgray;
      width: min-content;
      border-radius: 0.5em;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.075);
      overflow: hidden;
    }
    input.clipboard-copy-input {
      border: none;
      padding: 0.5em 0.75em;
      font-size: 1em;
    }
    button.clipboard-copy-button {
      color: rgba(0, 0, 0, 0.875);
      background-color: #fafafa;
      border: none;
      margin: 0;
      border-left: 1px solid lightgray;
      border-radius: 0;
      padding: 0.75em;
      min-width: 6em;
      font-size: 0.875em;
      transition: all 300ms ease-in-out;
    }
    button.clipboard-copy-button:hover {
      cursor: pointer;
      background-color: #f0f0f0;
    }
  `)
};

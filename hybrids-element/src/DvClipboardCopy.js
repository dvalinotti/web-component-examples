import { html, property, store } from "hybrids";
import { copyTextToClipboard } from './utils'

const State = {
  copied: false,
}

function handleClick(host) {
  copyTextToClipboard(host.text)
    .then(() => {
      store.set(State, { copied: true })
      window.alert('Copied text to clipboard!');
    })
    .catch(() => {
      window.alert('Failed to copy text to clipboard.');
    })
}

function resetCopiedState() {
  store.set(State, { copied: false })
}

export default {
  text: property('text'),
  render: ({ text }) => html`
    <div class="container">
      <div class="clipboard-copy">
        <input type="text" class="clipboard-copy-input" value=${text} readonly>
        <button onclick="${handleClick}">
          Copy
        </button>
        <button onclick="${resetCopiedState}">
          Reset
        </button>
        <button disabled class="clipboard-state-button" style="background-color: ${store.get(State).copied ? 'green' : 'red'}">
          ${store.get(State).copied ? 'Copied' : 'Not Copied'}
        </button>
      </div>
    </div>
  `.style(`
    .container {
      margin: 0.5em;
      display: flex;
      flex-direction: column;
    }
    .clipboard-copy {
      display: flex;
      align-items: stretch;
      justify-content: center;
      border: 1px solid lightgray;
      width: min-content;
      border-radius: 0.5em;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.075);
      overflow: hidden;
      font-size: 1.125em;
    }
    input.clipboard-copy-input {
      border: none;
      padding: 0.5em 0.75em;
      font-size: 1em;
    }
    button {
      color: rgba(0, 0, 0, 0.875);
      background-color: #fafafa;
      border: none;
      margin: 0;
      border-left: 1px solid lightgray;
      border-radius: 0;
      padding: 1em;
      min-width: 6em;
      font-size: 0.875em;
      transition: all 300ms ease-in-out;
    }
    button:hover {
      cursor: pointer;
      background-color: #f0f0f0;
    }
    button.clipboard-state-button {
      color: white;
      width: 32ch;
    }

  `)
};

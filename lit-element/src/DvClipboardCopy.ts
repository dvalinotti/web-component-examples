/* eslint-disable no-alert */
import { html, LitElement, property } from 'lit-element';
import { copyTextToClipboard } from './utils.js';
import { clipboardCopyStyles } from './styles.js';

export class DvClipboardCopy extends LitElement {
  static styles = [clipboardCopyStyles];

  @property({ type: String }) text = '';

  async __handleClick() {
    copyTextToClipboard(this.text)
      .then(() => {
        window.alert('Copied text to clipboard!');
      })
      .catch(() => {
        window.alert('Failed to copy text to clipboard.');
      })
  }

  render() {
    return html`
      <div class="clipboard-copy">
        <input
          class="clipboard-copy-input"
          type="text"
          .value=${this.text}
          readonly
        />
        <button
          class="clipboard-copy-button"
          @click=${this.__handleClick}
        >
          Copy
        </button>
      </div>
    `;
  }
}

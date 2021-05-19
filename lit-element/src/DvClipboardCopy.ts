/* eslint-disable no-alert */
import { html, LitElement, property, state } from 'lit-element';
import { copyTextToClipboard } from './utils.js';
import { clipboardCopyStyles } from './styles.js';

export class DvClipboardCopy extends LitElement {
  static styles = [clipboardCopyStyles];

  @property({ type: String })
  text = '';

  @state()
  copied: Boolean = false;

  async __handleClick() {
    copyTextToClipboard(this.text)
      .then(() => {
        this.copied = true;
        window.alert('Copied text to clipboard!');
      })
      .catch(() => {
        window.alert('Failed to copy text to clipboard.');
      })
  }

  __resetCopiedState() {
    this.copied = false;
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
        <button @click=${this.__handleClick}>
          Copy
        </button>
        <button @click=${this.__resetCopiedState}>
          Reset
        </button>
        <button class="clipboard-state-button" style=${`background-color: ${this.copied ? 'green' : 'red'}`}>
          ${this.copied ? 'Copied' : 'Not Copied'}
        </button>
      </div>
    `;
  }
}

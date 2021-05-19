import { Component, Host, h, Prop } from '@stencil/core';
import { copyTextToClipboard } from '../../../../utils';

@Component({
  tag: 'dv-clipboard-copy',
  styleUrl: 'dv-clipboard-copy.css',
  shadow: true,
})
export class DvClipboardCopy {
  @Prop() copyText: string = '';

  // onclick event handler for Copy button
  handleClickCopy(e: MouseEvent) {
    e.preventDefault();
    copyTextToClipboard(this.copyText)
      .then(() => {
        window.alert('Copied text to clipboard!');
      })
      .catch(() => {
        window.alert('Failed to copy to clipboard.');
      })
  }

  render() {
    return (
      <Host>
        <div class="clipboard-copy">
          <input
            type="text"
            class="clipboard-copy-input"
            value={this.copyText}
            readonly
          />
          <button
            class="clipboard-copy-button"
            onClick={(e: MouseEvent) => this.handleClickCopy(e)}
          >
            Copy
          </button>
        </div>
      </Host>
    );
  }

}

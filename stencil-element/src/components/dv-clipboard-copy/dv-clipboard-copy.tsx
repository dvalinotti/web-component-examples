import { Component, Host, h, Prop, State } from '@stencil/core';
import { copyTextToClipboard } from '../../../../utils';

@Component({
  tag: 'dv-clipboard-copy',
  styleUrl: 'dv-clipboard-copy.css',
  shadow: true,
})
export class DvClipboardCopy {
  @Prop() copyText: string = '';
  @State() copied: Boolean = false;

  // onclick event handler for Copy button
  handleClickCopy(e: MouseEvent) {
    e.preventDefault();
    copyTextToClipboard(this.copyText)
      .then(() => {
        this.copied = true;
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
          <button onClick={(e: MouseEvent) => this.handleClickCopy(e)}>
            Copy
          </button>
          <button onClick={() => this.copied = false}>
            Reset
          </button>
          <button disabled class="clipboard-state-button" style={{ backgroundColor: this.copied ? 'green' : 'red'}}>
            {this.copied ? 'Copied' : 'Not Copied'}
          </button>
        </div>
      </Host>
    );
  }

}

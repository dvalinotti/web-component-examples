import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import { copyNodeTextToClipboard } from '../../../../utils';

@Component({
  tag: 'dv-clipboard-copy',
  styleUrl: 'dv-clipboard-copy.css',
  shadow: true,
})
export class DvClipboardCopy {
  @Prop() copyText: string = '';
  @State() success: Boolean = false;
  inputElement!: HTMLInputElement;

  @Listen('focus', { capture: true })
  handleFocus(e: FocusEvent) {
    e.preventDefault();
    this.inputElement.select();
  }

  handleClickCopy(e: MouseEvent) {
    e.preventDefault();
    copyNodeTextToClipboard(this.inputElement)
      .then(() => {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
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
            aria-label={this.copyText}
            readonly
            autofocus
            ref={(el: HTMLInputElement) => this.inputElement = el}
          />
          <button
            class={`clipboard-copy-button ${this.success ? 'success' : ''}`}
            aria-label="Copy to Clipboard"
            onClick={(e: MouseEvent) => this.handleClickCopy(e)}
          >
            {this.success ? 'Success!' : 'Copy'}
          </button>
        </div>
      </Host>
    );
  }

}

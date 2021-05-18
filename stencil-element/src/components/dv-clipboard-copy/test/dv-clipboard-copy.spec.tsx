import { newSpecPage } from '@stencil/core/testing';
import { DvClipboardCopy } from '../dv-clipboard-copy';

describe('dv-clipboard-copy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DvClipboardCopy],
      html: `<dv-clipboard-copy></dv-clipboard-copy>`,
    });
    expect(page.root).toEqualHtml(`
      <dv-clipboard-copy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dv-clipboard-copy>
    `);
  });
});

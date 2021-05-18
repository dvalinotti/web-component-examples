import { newSpecPage } from '@stencil/core/testing';
import { DvButton } from '../dv-button';

describe('dv-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DvButton],
      html: `<dv-button></dv-button>`,
    });
    expect(page.root).toEqualHtml(`
      <dv-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dv-button>
    `);
  });
});

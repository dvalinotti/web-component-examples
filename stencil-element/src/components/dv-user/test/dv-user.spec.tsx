import { newSpecPage } from '@stencil/core/testing';
import { DvUser } from '../dv-user';

describe('dv-user', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DvUser],
      html: `<dv-user></dv-user>`,
    });
    expect(page.root).toEqualHtml(`
      <dv-user>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dv-user>
    `);
  });
});

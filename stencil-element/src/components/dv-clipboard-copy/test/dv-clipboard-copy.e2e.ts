import { newE2EPage } from '@stencil/core/testing';

describe('dv-clipboard-copy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dv-clipboard-copy></dv-clipboard-copy>');

    const element = await page.find('dv-clipboard-copy');
    expect(element).toHaveClass('hydrated');
  });
});

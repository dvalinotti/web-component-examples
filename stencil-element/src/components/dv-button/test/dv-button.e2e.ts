import { newE2EPage } from '@stencil/core/testing';

describe('dv-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dv-button></dv-button>');

    const element = await page.find('dv-button');
    expect(element).toHaveClass('hydrated');
  });
});

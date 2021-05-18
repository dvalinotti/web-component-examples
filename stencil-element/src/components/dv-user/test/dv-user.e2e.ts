import { newE2EPage } from '@stencil/core/testing';

describe('dv-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dv-user></dv-user>');

    const element = await page.find('dv-user');
    expect(element).toHaveClass('hydrated');
  });
});

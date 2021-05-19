export async function copyTextToClipboard(text: string): Promise<void> {
  try {
    return navigator.clipboard.writeText(text || '');
  } catch (err) {
    return Promise.reject();
  }
}

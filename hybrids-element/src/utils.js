import 'regenerator-runtime'
export async function copyTextToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text || '');
  } catch (err) {
    return Promise.reject();
  }
}
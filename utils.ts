export async function copyNodeTextToClipboard(node: Element | HTMLInputElement): Promise<void> {
  // Use navigator to copy to clipboard if browser supports
  if ('clipboard' in navigator) {
    const text = node instanceof HTMLInputElement ? node.value : node.textContent;
    return navigator.clipboard.writeText(text || '');
  }

  const selection = getSelection();
  if (!selection) {
    return Promise.reject(new Error());
  }

  selection.removeAllRanges();
  const selectionRange = document.createRange();
  selectionRange.selectNode(node);
  selection.addRange(selectionRange);

  document.execCommand('copy');
  selection.removeAllRanges()
  return Promise.resolve()
}
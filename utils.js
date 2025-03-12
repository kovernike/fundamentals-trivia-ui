export function decodeHtmlEntities(text) {
  const parser = new DOMParser();

  const decoded = parser.parseFromString(text, 'text/html').body.textContent;

  return decoded;
}

export function encodeHtmlEntities(text) {
  const div = document.createElement('div');

  div.textContent = text;

  return div.innerHTML;
}

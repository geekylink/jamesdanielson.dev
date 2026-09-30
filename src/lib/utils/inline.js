import { base } from '$app/paths';

/** Escape text so it is safe to place inside HTML. */
function escape(/** @type {string} */ s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

/**
 * Turns the small markup used in content files into HTML:
 *   [label](https://...)  -> external link (new tab)
 *   [label](/path)        -> internal link (respects the site's base path)
 *   **bold**              -> <strong>
 * Everything else is escaped. Content is written by the site owner, but escaping keeps it predictable.
 * @param {string} text
 */
export function renderInline(text = '') {
  let out = escape(text);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
    const external = /^https?:\/\//.test(url);
    const newTab = external || /\.pdf$/i.test(url);
    const href = url.startsWith('/') ? `${base}${url}` : url;
    const attrs = newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return out;
}

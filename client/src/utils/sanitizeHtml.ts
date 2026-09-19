import DOMPurify from 'dompurify';

export const sanitizeHtml = (dirtyHtml: string): string => {
  if (!dirtyHtml) return '';

  DOMPurify.addHook('uponSanitizeElement', (node, data) => {
    if (!(node instanceof Element)) return;

    // pre -> div
    if (data.tagName === 'pre') {
      const div = document.createElement('div');

      while (node.firstChild) {
        div.appendChild(node.firstChild);
      }

      if (node.attributes) {
        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          div.setAttribute(attr.name, attr.value);
        }
      }

      node.parentNode?.replaceChild(div, node);
    }

    // a target blank for safety
    if (data.tagName === 'a') {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });

  const sanitized = DOMPurify.sanitize(dirtyHtml, {
    ALLOWED_TAGS: [
      'a',
      'p',
      'div',
      'span',
      'br',
      'b',
      'i',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'code',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ],
    ALLOWED_ATTR: ['href', 'title', 'class'],
  });

  DOMPurify.removeHooks('uponSanitizeElement');

  return sanitized as string;
};

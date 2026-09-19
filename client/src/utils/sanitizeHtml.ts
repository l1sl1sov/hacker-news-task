import sanitizeHtml from 'sanitize-html';

export const getSanitizedHtml = (dirtyHtml: string): string => {
  if (!dirtyHtml) return '';

  return sanitizeHtml(dirtyHtml, {
    allowedTags: [
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

    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel'],
      div: ['class'],
      span: ['class'],
      code: ['class'],
    },

    transformTags: {
      pre: 'div',

      a: (tagName, attribs) => {
        return {
          tagName,
          attribs: {
            ...attribs,
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        };
      },
    },
  });
};

import { sanitizeHtml } from '../../utils/sanitizeHtml';

interface SafeHtmlProps {
  html: string;
  className?: string;
}

export const SafeHtml = ({ html, className = '' }: SafeHtmlProps) => {
  const sanitizedHtml = sanitizeHtml(html);

  return (
    <div
      className={`wrap-break-word space-y-2 prose prose-sm max-w-none 
        [&_a]:text-primary [&_a]:font-bold [&_a]:underline hover:[&_a]:text-primary-glow
        ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

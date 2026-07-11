/**
 * Renders a JSON-LD structured-data block. Search engines read these to build
 * rich results (org knowledge panel, product/pricing, FAQ accordions, breadcrumbs).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is our own static data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function formatDescriptionToParagraphs(description: string) {
  if (!description) return [];

  const paragraphs = description.split('\n');

  const paragraphsRendered = paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return paragraphsRendered;
}

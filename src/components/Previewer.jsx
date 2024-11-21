import { marked } from 'marked';

export default function Preview({ output }) {
  return (
    <div
      id="preview"
      className="prose prose-sm sm:prose-lg max-w-none"
      dangerouslySetInnerHTML={{
        __html: marked(output), // Converts Markdown to HTML
      }}
    />
  );
}

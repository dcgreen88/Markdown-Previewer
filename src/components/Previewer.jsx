import { marked } from 'marked';

export default function Preview({ output }) {
  return (
    <div className="mt-[20px] max-w-[800px] min-h-[200px] shadow-[1px_1px_10px_2px] shadow-slate-500">
      <div
        id="toolbar"
        className="flex justify-between border border-black bg-teal-500 p-[6px] shadow-[1px_1px_10px_2px] shadow-slate-500"
      >
        <span className="font-bold">
          <i className="fa-brands fa-free-code-camp"></i>Previewer
        </span>
        <span>
          <i className="fa fa-arrows-alt rotate-45"></i>
        </span>
      </div>
      <div
        id="preview"
        className="prose prose-sm sm:prose-lg bg-sky-200 shadow-[1px_1px_10px_2px] shadow-slate-500 p-[18px]"
        dangerouslySetInnerHTML={{
          __html: marked(output), // Converts Markdown to HTML
        }}
      />
    </div>
  );
}

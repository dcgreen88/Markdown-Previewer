export default function Editor({ initialValue, onChange }) {
  return (
    <div className="w-[600px] max-w-[600px] min-h-[200px] shadow-[1px_1px_10px_2px] shadow-slate-500">
      <div
        id="toolbar"
        className="flex justify-between border border-black bg-teal-500 p-[6px]"
      >
        <span className="font-bold">
        <i className="fa-brands fa-free-code-camp"></i>Editor
        </span>
        <span>
          <i className="fa fa-arrows-alt rotate-45"></i>
        </span>
      </div>
      <textarea
        id="editor"
        onChange={(e) => {
          onChange(e.target.value); // Pass the input value to App
        }}
        value={initialValue}
        className="flex w-[600px] max-w-[600px] min-h-[200px] bg-sky-200 shadow-[1px_1px_10px_2px] shadow-slate-500 pt-[6px] pl-[6px]"
      />
    </div>
  );
}

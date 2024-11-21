

export default function Editor({ initialValue, onChange }) {
  return (
    <textarea
      id="editor"
      onChange={(e) => {
        onChange(e.target.value); // Pass the input value to App
      }}
      value={initialValue}
    />
  );
}

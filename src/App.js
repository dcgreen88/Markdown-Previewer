import Editor from './components/Editor';
import Preview from './components/Previewer';
import { useState } from 'react';
import textTemplate from './textTemplate.js';

function App() {
  const [text, setText] = useState(textTemplate);

  function onMarkdownChange(value) {
    setText(value);
  }

  return (
    <div className="App flex-col justify-items-center bg-cyan-200 p-[20px]">
      <Editor initialValue={text} onChange={onMarkdownChange} />
      <Preview output={text} />
    </div>
  );
}

export default App;

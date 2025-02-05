import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleChange = (value: string) => {
    setEditorValue(value);
  };

  return (
    <div>

      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        theme="snow"
      />
      <div>
        <h3>Editor Output</h3>
        <div dangerouslySetInnerHTML={{ __html: editorValue }}></div>
      </div>
    </div>
  );
};

export default RichTextEditor;

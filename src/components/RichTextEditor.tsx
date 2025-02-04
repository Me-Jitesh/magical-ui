import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const RichTextEditor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleChange = (value: string) => {
    setEditorValue(value); // Update the value of the editor
  };

  return (
    <div>

      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        theme="snow" // Use the "snow" theme for the editor
      />
      <div>
        <h3>Editor Output</h3>
        <div dangerouslySetInnerHTML={{ __html: editorValue }}></div>
      </div>
    </div>
  );
};

export default RichTextEditor;

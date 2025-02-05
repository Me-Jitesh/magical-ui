import { Box } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleChange = (value: string) => {
    setEditorValue(value);
  };

  return (
    <Box>
      <Box sx={{ mx: 5 }}>
        <ReactQuill
          value={editorValue}
          onChange={handleChange}
          theme="snow"
        />
      </Box>
      <Box sx={{ mx: 5 }}>
        <h3>Editor Output</h3>
        <div dangerouslySetInnerHTML={{ __html: editorValue }}></div>
      </Box>

    </Box >
  );
};

export default RichTextEditor;

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RichTextEditor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>('');
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user && user.name) {
      setEditorValue(`
         ${user.id}
         <br/>
         ${user.name}
         <br/>
         ${user.address}
         <br/>
         ${user.email}
         <br/>
        ${user.phone}
      `);
    }
  }, [user]);

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

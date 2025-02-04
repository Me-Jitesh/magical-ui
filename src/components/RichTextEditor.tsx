import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    };

    return (
        <div style={{ padding: '5rem' }}>
            <ReactQuill value={editorContent} onChange={handleEditorChange} />
        </div>
    );
};

export default RichTextEditor;

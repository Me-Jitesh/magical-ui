import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { UserData } from '../models/UserData';

const User: React.FC = () => {

    const udata: UserData = {
        address: "",
        email: "",
        phone: ""
    };

    const [formData, setFormData] = useState({ name: '', id: '', userdata: udata });
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (hasUnsavedChanges) {
                event.returnValue = "Stop! You have unsaved changes";
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [hasUnsavedChanges]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setHasUnsavedChanges(true);
    };

    const handleSubmit = () => {
        const userId = `user-${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(userId, JSON.stringify(formData));
        console.log(localStorage.getItem(userId)) // Debug
        setHasUnsavedChanges(false);
    };

    return (
        <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
            <TextField label="ID" name="id" value={formData.id} onChange={handleChange} />
            <TextField label="User Data" name="udata" value={formData.userdata} onChange={handleChange} />
            <Button variant="outlined" color="secondary" onClick={handleSubmit} sx={{ marginTop: '1rem' }}>Save</Button>
        </Box>
    );
};

export default User;

import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);


    const bgColor = `rgb(${Math.min(count * 10, 255)}, ${Math.min(count * 5, 255)}, ${Math.min(count * 8, 255)})`;

    return (
        <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Box
                sx={{
                    padding: '1rem',
                    backgroundColor: bgColor,
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    minHeight: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" color="#673ab7">
                    Count: {count}
                </Typography>
            </Box>


            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button variant="outlined" color="secondary" onClick={handleIncrement}>Increment</Button>
                <Button variant="outlined" color="primary" onClick={handleDecrement}>Decrement</Button>
                <Button variant="outlined" color="error" onClick={handleReset}>Reset</Button>
            </Box>
        </Box>
    );
};

export default Counter;

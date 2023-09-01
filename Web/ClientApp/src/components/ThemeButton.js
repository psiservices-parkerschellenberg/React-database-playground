import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ThemeButton = () => {

    const [theme, setTheme] = useState('light'); // 'light' or 'dark'

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        document.documentElement.setAttribute('data-bs-theme', newTheme);
    };

    return (
        <Button onClick={toggleTheme}>Toggle Theme</Button>
    );
};

export default ThemeButton;
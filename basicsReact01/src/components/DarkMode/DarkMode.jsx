import React, { useState, useEffect } from 'react'
import './dark-mode.css'
function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode')
        if (savedMode === 'true') {
            setIsDarkMode(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode)
    }, [isDarkMode])

    const toggleMode = () => {
        setIsDarkMode(prev => !prev);
    }
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <h1>Dark Mode Toggle Example</h1>
            <p>The current theme is {isDarkMode ? 'Dark' : 'Light'} Mode.</p>
            <button onClick={toggleMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}

export default DarkMode
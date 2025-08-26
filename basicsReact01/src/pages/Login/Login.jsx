import React, { useState } from 'react'
import './login.css'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'Omkar' && password === 'omkar123') {
            setMessage('Login Successful!!')
        } else {
            setMessage("Invalid Credentials")
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label">Username:</label>
                <input
                    type="text"
                    className="login-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label className="login-label">Password:</label>
                <input
                    type="text"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="live-text">Live Username: {username}</p>
                <p className="live-text">Live Password: {password}</p>

                <button type="submit" className="login-button">Submit</button>
            </form>

            {message && (
                <p className={`message ${message === 'Login Successful!!' ? 'success' : 'error'}`}>
                    {message}
                </p>
            )}
        </div>

    )
}

export default Login
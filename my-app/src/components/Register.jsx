import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle registration logic (e.g., API request to register the user)
        // For now, we'll simulate a successful registration response

        if (username && email && password) {
            // Simulating a successful registration
            setSuccess('Registration successful!');
            setError('');
            setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
        } else {
            setError('Please fill in all fields.');
            setSuccess('');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Create an Account</h2>

                {/* Error Message */}
                {error && <div className="alert alert-danger">{error}</div>}

                {/* Success Message */}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <button type="submit" className="btn btn-success w-100">
                        Register
                    </button>
                </form>

                <p className="text-center mt-3">
                    Already have an account?{' '}
                    <a href="/login" className="text-decoration-none text-primary">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;

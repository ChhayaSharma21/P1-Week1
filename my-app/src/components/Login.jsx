import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // try {
        //     const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });

        //     // Save user data in local storage
        //     console.log(data.username)
        //     localStorage.setItem('user', JSON.stringify({ username: data.username, token: data.token }));

        //     // Navigate to dashboard
        //     navigate('/dashboard');
        // } catch (error) {
        //     if (error.response && error.response.data && error.response.data.message) {
        //         setError(error.response.data.message); 
        //         navigate('/login');
        //     } else {
        //         setError('An unexpected error occurred. Please try again later.');
        //         navigate('/login');
        //     }
        // }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px', marginTop: '50px' }}>
                <div className="card-body p-4">
                    <h2 className="text-center mb-4">Login to Your Account</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {error && <p className="text-danger text-center mt-3">{error}</p>}
                    <p className="text-center mt-3">
                        Don't have an account? <a href="/register" className="text-decoration-none text-primary">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

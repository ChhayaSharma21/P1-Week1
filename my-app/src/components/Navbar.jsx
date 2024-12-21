import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        // Redirect to landing page
        navigate('/');
    };

    // Inline styles
    const navbarStyle = {
        backgroundColor: '#f8f9fa',
        padding: '15px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        width: '100%',
    };

    const navbarBrandStyle = {
        fontWeight: 'bold',
        fontSize: '1.8rem',
        color: '#007bff',
        textDecoration: 'none',
        letterSpacing: '1px',
    };

    const navbarToggleButtonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
    };

    const navbarMenuStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    };

    const navLinkStyle = {
        color: '#007bff',
        textDecoration: 'none',
        padding: '8px 15px',
        fontSize: '1rem',
        transition: 'color 0.3s ease',
    };

    const activeNavLinkStyle = {
        color: '#28a745',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#007bff',
        textDecoration: 'none',
        padding: '8px 15px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const handleHover = (e) => {
        e.target.style.color = '#28a745';
    };

    const handleHoverOut = (e) => {
        e.target.style.color = '#007bff';
    };

    return (
        <nav style={navbarStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={navbarBrandStyle}>
                    CollabTool
                </Link>

                <button
                    style={navbarToggleButtonStyle}
                    onClick={() => { /* Add functionality for toggling mobile menu if needed */ }}
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" style={{ width: '30px', height: '3px', backgroundColor: '#333' }}></span>
                </button>

                <div style={navbarMenuStyle}>
                    <ul style={{ display: 'flex', margin: '0', padding: '0', listStyle: 'none' }}>
                        <li style={{ marginRight: '20px' }}>
                            <Link 
                                to="/dashboard" 
                                style={navLinkStyle} 
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverOut}
                            >
                                Dashboard
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        style={buttonStyle}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        <strong>{user.username}</strong> - Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li style={{ marginRight: '20px' }}>
                                    <Link 
                                        to="/login" 
                                        style={navLinkStyle} 
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/register" 
                                        style={navLinkStyle} 
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

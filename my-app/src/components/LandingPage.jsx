import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron bg-light p-5 rounded shadow-lg">
                {/* Hero Section */}
                <h1 className="display-3 fw-bold text-primary">CollabTool</h1>
                <p className="lead text-muted mb-4">
                    Your ultimate platform for real-time team collaboration. Create, share, and work together on documents and projects.
                </p>
                <hr className="my-4" />

                {/* Product Features Section */}
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h4 className="text-dark">Real-Time Collaboration</h4>
                        <p className="text-muted">
                            Work together with your team in real time, no matter where you are.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h4 className="text-dark">Document Sharing</h4>
                        <p className="text-muted">
                            Share files, docs, and ideas effortlessly across your team.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h4 className="text-dark">Task Management</h4>
                        <p className="text-muted">
                            Stay organized with task lists, deadlines, and collaborative calendars.
                        </p>
                    </div>
                </div>

                {/* Action Section */}
                <div className="mt-4">
                    <Link to="/register" className="btn btn-success btn-lg me-3 rounded-pill px-4 py-2">
                        Get Started
                    </Link>
                    <Link to="/login" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-2">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

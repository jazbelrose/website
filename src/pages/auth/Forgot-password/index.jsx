import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function Forgotpassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the forgot password logic here
        console.log('Forgot Password with:', email);
    };

    return (
        <Container>
            <section className="vh-100 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <div className="login-card  text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 ">*MYLG!*</h2>
                                        <p className="text-white-50 mb-4">
                                            Forgot Your Password?
                                        </p>
                                        <p className="text-white-50 mb-5">
                                            We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                                        </p>

                                        <form onSubmit={handleSubmit}>
                                            {/* Email Field */}
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    placeholder="Enter email address"
                                                    onChange={e => setEmail(e.target.value)}
                                                    style={{ fontSize: '0.9rem' }} 
                                                />
                                            </div>

                                            {/* Reset Password Button */}
                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                                Reset Password
                                            </button>
                                        </form>

                                       

                                       
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            <Link to="/register" className="text-white-50 fw-bold">
                                                Create an account
                                            </Link>
                                        </p>
                                        <p className="mb-0">
                                            <Link to="/login" className="text-white-50 fw-bold">
                                                Already have an account? Login
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

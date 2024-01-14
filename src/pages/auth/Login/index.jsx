import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signIn, signOut } from 'aws-amplify/auth';
import { useAuth } from "../../../app/contexts/AuthContext";




import { Container } from 'react-bootstrap';

export function Login() {

    const { isAuthenticated } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Renamed function
    const handleSignIn = async (username, password) => {
        try {
            const signInResponse = await signIn({ username, password });
            console.log('Sign in successful', signInResponse);



            // Additional actions upon successful sign-in, e.g., redirecting the user
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign-in error, e.g., displaying an error message to the user
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSignIn(username, password);
    };


    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard'); // Redirect to the dashboard if already signed in
        }
    }, [isAuthenticated]);

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
                                        <p className="text-white-50 mb-5">Please enter your login and password</p>

                                        <form onSubmit={handleSubmit}> {/* Add the form element and onSubmit attribute */}
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    value={username} 
                                                    placeholder="Email"
                                                    onChange={(e) => setUsername(e.target.value)} 
                
                                                    style={{ fontSize: '0.9rem' }}
                                                />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                    value={password}
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)} 
                                                    style={{ fontSize: '0.9rem' }}
                                                />
                                            </div>


                                            <p className="small mb-5 pb-lg-2">
                                                <Link to="/forgot-password" className="text-white-50">
                                                    Forgot password?
                                                </Link>
                                            </p>

                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                                Login
                                            </button>
                                        </form>


                                        <div className="text-center">
                                            <p className="mt-5 mb-3">Or login with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-">
                                                <i className="fab fa-facebook-f text-white"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google text-white"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter text-white"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-apple text-white"></i>
                                            </button>
                                        </div>

                                    </div>




                                    <div>
                                        <p className="mb-0">
                                            <Link to="/register" className="text-white-50 fw-bold">
                                                Create an account
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

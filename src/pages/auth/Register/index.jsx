import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signIn, signOut, signUp } from '@aws-amplify/auth';



const updateUserProfile = async (profileData) => {
    const apiEndpoint = 'https://rvnpu2j92m.execute-api.us-west-1.amazonaws.com/default/userProfiles'; 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            TableName: "UserProfiles",
            Item: {
                userId: profileData.userId,
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                email: profileData.email // Assuming you pass email as part of profileData
                // Add other profile data here if needed
            }
        })
    };

    const response = await fetch(apiEndpoint, requestOptions);
    const data = await response.json();
    return data; // This will be the response from your API
};




export function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            console.error('All fields are required');
            return;
        }
    
        try {
            const signUpResponse = await signUp({
                username: email,
                password,
                attributes: { email }
            });
    
            console.log('Sign up response:', signUpResponse);
    
            // Extract the userId from the signUpResponse
            const userId = signUpResponse.userId; // Use 'userId' from the signUpResponse
    
            if (userId) {
                try {
                    const userProfileUpdateResponse = await updateUserProfile({
                        userId,
                        firstName,
                        lastName,
                        email
                    });
                    console.log('User profile successfully updated:', userProfileUpdateResponse);
                } catch (profileError) {
                    console.error('Error updating user profile:', profileError);
                }
            } else {
                console.error('User ID not available for database update.');
            }
        } catch (signUpError) {
            console.error('Error signing up:', signUpError);
        }
    };
    
    
    
    
    
    

    return (
        <Container>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <div className="login-card  text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 ">*MYLG!*</h2>
                                        <p className="text-white-50 mb-5">Please enter your registration details</p>

                                        <form onSubmit={handleSubmit}>
                                            {/* First Name and Last Name Fields */}
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <div className="form-outline form-white">
                                                        <input
                                                            type="text"
                                                            id="typeFirstName"
                                                            className="form-control form-control-lg"
                                                            value={firstName}
                                                            placeholder="First Name"
                                                            onChange={e => setFirstName(e.target.value)}
															style={{ fontSize: '0.9rem' }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-outline form-white">
                                                        <input
                                                            type="text"
                                                            id="typeLastName"
                                                            className="form-control form-control-lg"
                                                            value={lastName}
                                                            placeholder="Last Name"
                                                            onChange={e => setLastName(e.target.value)}
															style={{ fontSize: '0.9rem' }} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmail"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    placeholder="Email"
                                                    onChange={e => setEmail(e.target.value)}
													style={{ fontSize: '0.9rem' }} 
                                                />
                                            </div>

                                            {/* Password and Repeat Password Fields */}
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <div className="form-outline form-white">
                                                        <input
                                                            type="password"
                                                            id="typePassword"
                                                            className="form-control form-control-lg"
                                                            value={password}
                                                            placeholder="Password"
                                                            onChange={e => setPassword(e.target.value)}
															style={{ fontSize: '0.9rem' }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-outline form-white">
                                                        <input
                                                            type="password"
                                                            id="typeRepeatPassword"
                                                            className="form-control form-control-lg"
                                                            value={repeatPassword}
                                                            placeholder="Repeat Password"
                                                            onChange={e => setRepeatPassword(e.target.value)}
															style={{ fontSize: '0.9rem' }} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Register Button */}
                                            <button className="btn btn-outline-light btn-lg px-5 mt-4" type="submit">
                                                Register Account
                                            </button>
                                        </form>

                                        

                                       {/*  <div className="text-center">
                                            
                                            <p className="mt-5 mb-3">Or register with:</p>
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
                                        
                                        </div>*/}

                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            <Link to="/login" className="text-white-50 fw-bold">
											Already have an account? Login!
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
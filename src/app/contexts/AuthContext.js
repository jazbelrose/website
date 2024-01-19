import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

const AuthContext = createContext({ isAuthenticated: false, user: null });

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);





    const fetchUserProfile = async (userId) => {
        const apiEndpoint = `https://rvnpu2j92m.execute-api.us-west-1.amazonaws.com/default/userProfiles?userId=${userId}`;
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data.Items[0]; // Assuming user data is in the first item
    };


    const checkCurrentUser = async () => {
        try {
            const cognitoUser = await getCurrentUser();
            const userId = cognitoUser.username; // Cognito's userId
            const userProfile = await fetchUserProfile(userId);
    
            setIsAuthenticated(true);
            setUser({
                ...userProfile, 
                cognitoUsername: cognitoUser.username, // Cognito username
                
            });
            
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
        }

        console.log('AuthProvider:', { isAuthenticated, setIsAuthenticated, user, setUser });

    };



    const checkSessionValidity = async () => {
        try {
            const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    
           
            if (!accessToken || !idToken) {
                throw new Error('Session tokens are missing');
            }
    
           
            const now = new Date();
            const isAccessTokenValid = new Date(accessToken.payload.exp * 1000) > now;
            const isIdTokenValid = new Date(idToken.payload.exp * 1000) > now;
    
            if (!isAccessTokenValid || !isIdTokenValid) {
                throw new Error('Session tokens are expired');
            }
    
           
            setIsAuthenticated(true);

        } catch (error) {
            console.error("Session validation failed:", error);
            setIsAuthenticated(false);
            setUser(null);
            // Optionally, redirect to login or trigger a modal/overlay for reauthentication
            // navigate('/login');
        }
    };
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            checkSessionValidity();
        }, 1000 * 60 * 45); 
    
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);
    
    useEffect(() => {
        checkCurrentUser();
    }, []);


    useEffect(() => {
        if (user) {
            console.log('Logged-in username:', user.username);
        }
    }, [user]);
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, checkSessionValidity, checkCurrentUser }}>
        {children}
    </AuthContext.Provider>
    
    );
};

export const useAuth = () => useContext(AuthContext);

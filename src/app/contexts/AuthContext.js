import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

const AuthContext = createContext({ isAuthenticated: false, user: null });

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkCurrentUser();
    }, []);

    const checkCurrentUser = async () => {
        try {
            const { username, signInDetails } = await getCurrentUser();
            const { tokens: session } = await fetchAuthSession();
            setIsAuthenticated(true);
            setUser({
                username,
                session,
                authenticationFlowType: signInDetails.authFlowType
            });
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

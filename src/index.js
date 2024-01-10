import React from 'react';
import ReactDOM from "react-dom/client";
import { Amplify } from 'aws-amplify';

import awsConfig from './aws-exports'; // Adjust the path as necessary
import App from './app/App';
import './index.css';

// Configure Amplify with your AWS configurations
Amplify.configure(awsConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import React from 'react';
import { Amplify } from 'aws-amplify';

import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

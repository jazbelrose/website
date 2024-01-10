// src/amplify-config.js
const amplifyConfig = {
    Auth: {
      region: 'us-west-1', // replace with your Cognito User Pool region
      userPoolId: 'us-west-1_MtegOp35G', // replace with your Cognito User Pool ID
      userPoolWebClientId: '4v3bgjntq6r7t5qab64gg0cslb', // replace with your Cognito Web Client ID
      identityPoolId: 'us-west-1:dde347c5-f39e-4cab-af43-edb97eea2a01', 
    },
    // ... other configurations for additional services if needed
  };
  
  export default amplifyConfig;
  
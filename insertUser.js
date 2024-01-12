const AWS = require('aws-sdk');

// Configure the region and set DynamoDB endpoint (optional, for local development)
AWS.config.update({
  region: 'us-west-1', // replace with your region
  // endpoint: 'http://localhost:8000' // uncomment this if you're using DynamoDB Local
});

// Create DynamoDB service object
const ddb = new AWS.DynamoDB.DocumentClient();

// Define a user object
let user = {

  userId: '000001',
  name: 'Leah',
  email: 'leahbelrose@gmail.com',
  firstName: 'Leah',
  lastName: 'Belrose'

}
   
  

// Define the parameters for the DynamoDB put operation
let params = {
  TableName: 'UserProfiles', 
  Item: user
};

// Insert the user into the DynamoDB table
ddb.put(params, function(err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data);
  }
});

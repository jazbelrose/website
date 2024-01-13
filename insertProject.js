const AWS = require('aws-sdk');

// Configure the region and set DynamoDB endpoint (optional, for local development)
AWS.config.update({
  region: 'us-west-1', // replace with your region
  // endpoint: 'http://localhost:8000' // uncomment this if you're using DynamoDB Local
});

// Create DynamoDB service object
const ddb = new AWS.DynamoDB.DocumentClient();

// Define multiple project objects
let projects =[]
                


let params = {
    RequestItems: {
      'Projects': projects.map(project => ({
        PutRequest: { Item: project }
      }))
    }
  };
  
  ddb.batchWrite(params, function(err, data) {
    if (err) {
    console.error("Error in batch write:", err);
    } else {
    console.log("Batch write successful:", data);
    if (data.UnprocessedItems && Object.keys(data.UnprocessedItems).length > 0) {
    console.warn("Unprocessed Items:", data.UnprocessedItems);
    }
    }
    });
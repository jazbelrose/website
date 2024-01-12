const AWS = require('aws-sdk');


AWS.config.update({
  region: 'us-west-1', 
});

const ddb = new AWS.DynamoDB.DocumentClient();

const addNotificationToUser = async (userId, notification) => {
  const params = {
    TableName: 'UserNotifications',
    Item: {
      userId: userId, // Partition key
      notificationId: AWS.util.uuid.v4(), // Sort key - unique identifier for each notification
      message: notification.message,
      date: new Date().toISOString(),
      readStatus: false,
      // ... other notification attributes ...
    }
  };

  try {
    await ddb.put(params).promise();
    console.log(`Notification added to user ${userId}`);
  } catch (error) {
    console.error("Error adding notification:", error);
  }
};

// Example usage
addNotificationToUser('517082', {
  message: 'Your project has been updated.'
});

const AWS = require('aws-sdk');

// Configure the AWS region
AWS.config.update({
  region: 'us-west-1', // Replace with your region
});

// Create a DynamoDB service object
const ddb = new AWS.DynamoDB.DocumentClient();

const insertChatMessage = async (chatId, senderId, messageText, chatType, participants) => {
  const params = {
    TableName: 'Chats',
    Item: {
      chatId: chatId,
      timestamp: new Date().toISOString(),
      senderId: senderId,
      messageText: messageText,
      chatType: chatType, // 'one-on-one' or 'group'
      isRead: false,
      // Include participants only for group chats
      ...(chatType === 'group' && { participants: participants })
    }
  };

  try {
    await ddb.put(params).promise();
    console.log('Chat message inserted successfully.');
  } catch (error) {
    console.error('Error inserting chat message:', error);
  }
};

// Example usage
insertChatMessage('user123_user456', 'user123', 'Hello!', 'one-on-one');
insertChatMessage('group789', 'user123', 'Welcome to the group!', 'group', ['user123', 'user456', 'user789']);

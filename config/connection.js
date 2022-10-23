const { connect, connection} = require('mongoose');

const connectionStringURI = process.env.MONGODB_URI = `mongodb://127.0.0.1:27017/socialdb`;

mongodb.commect(
  connectionStringURI,
  { useNewURLParser: true, useUnifiedtopology: true });
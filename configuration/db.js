const mongoose = require('mongoose');

const connectDatabase = async function() {
  const cloud = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${cloud.connection.host}`);
}

module.exports = connectDatabase;
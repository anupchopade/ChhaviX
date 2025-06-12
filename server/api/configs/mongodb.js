// import mongoose from 'mongoose';

// const connectDB = async () => {
//   mongoose.connection.on('connected', () => {
//     console.log("DB connected");
//   });

//   await mongoose.connect(`${process.env.MONGODB_URI}/ChhaviX`);
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('Error: MONGODB_URI is not defined!');
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Attempting to connect to MongoDB with URI:', `${process.env.MONGODB_URI}/ChhaviX`);

    mongoose.connection.on('connected', () => {
      console.log("DB connected successfully");
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/ChhaviX`);
    console.log('MongoDB connect call completed.');
  } catch (error) {
    console.error('Failed to connect to MongoDB in catch block:', error.message);
    process.exit(1);
  }
};

export default connectDB;
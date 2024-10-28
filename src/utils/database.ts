import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to Database!');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;

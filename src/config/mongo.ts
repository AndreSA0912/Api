import mongoose from 'mongoose';
import "dotenv/config";

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/api-rest');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

export default dbConnect;

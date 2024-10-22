import app from './app';
import dotenv from 'dotenv';
import connectDB from './utils/database';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error('DB_URL is required');
}

app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

try {
  await mongoose.connect(dbUrl);
  app.listen(port, () => {
    console.log(`EasyLib backend listening on port ${port}`);
  });
} catch (error) {
  console.error('Unable to connect to MongoDB:', error);
  process.exit(1);
}

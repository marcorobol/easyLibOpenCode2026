import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import booksRouter from './app/books.js';

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

app.use(booksRouter);

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

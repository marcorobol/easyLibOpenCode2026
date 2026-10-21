import 'dotenv/config';
import mongoose from 'mongoose';
import Book from '../app/models/book.js';

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error('DB_URL is required');
}

const books = [
  {
    title: 'I promessi sposi',
    author: 'Manzoni',
    isbn: '9788807900128',
    available: true
  },
  {
    title: 'Il nome della rosa',
    author: 'Eco',
    isbn: '9788845292613',
    available: false
  },
  {
    title: 'La coscienza di Zeno',
    author: 'Italo Svevo',
    isbn: '9788807901279',
    available: true
  }
];

try {
  await mongoose.connect(dbUrl);
  await Book.insertMany(books);
  console.log(`${books.length} books inserted`);
} catch (error) {
  console.error('Unable to seed books:', error);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}

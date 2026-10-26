import express from 'express';
import Book from './models/book.js';

const router = express.Router();

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

router.get('/api/v1/books', async (req, res) => {
  const { title, author } = req.query;
  const filter = {};

  if (typeof title === 'string' && title.trim()) {
    filter.title = { $regex: escapeRegex(title.trim()), $options: 'i' };
  }

  if (typeof author === 'string' && author.trim()) {
    filter.author = { $regex: escapeRegex(author.trim()), $options: 'i' };
  }

  try {
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to search books' });
  }
});

export default router;

import express from 'express';
import { getBooks, addBook } from './controllers/books';

const router = express.Router();

router.get('/books', getBooks);
router.post('/books', addBook);

export default router;

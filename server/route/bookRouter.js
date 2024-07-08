import express from 'express';
import { addNewBook, getBookByISBN, fetchAndSaveBooks, getBooks } from '../controllers/bookController.js';

import upload from '../services/upload.js';

const bookRouter = express.Router();

// UC01: Buch nach ISBN suchen
bookRouter.get('/:isbn', getBookByISBN);

// UC02: Neues Buch erfassen
bookRouter.post('/', upload.single('book_image'), addNewBook);
bookRouter.get('/fetch-and-save', fetchAndSaveBooks);
bookRouter.get('/', getBooks);

export default bookRouter;

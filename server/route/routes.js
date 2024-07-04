import express from 'express';

import { addNewBook, getBookByISBN } from '../controllers/bookController.js';
import {
  loginUser,
  logoutUser,
  registerUser,
  getUserReviews, // Import getUserReviews here
} from '../controllers/userController.js';
import { addReview, deleteReview } from '../controllers/reviewController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// UC01: Buch nach ISBN suchen
router.get('/books/:isbn', getBookByISBN);

// UC02: Neues Buch erfassen
router.post('/books', upload.single('book_image'), addNewBook);

// UC03: Rezension zu einem Buch hinzufügen
router.post('/reviews', addReview);

// UC07: Rezension löschen
router.delete('/reviews/:reviewId', deleteReview);

// UC04: Benutzer registrieren
router.post('/register', upload.single('profileImageUrl'), registerUser);

// UC05: Benutzer einloggen
router.post('/login', loginUser);

// UC05: Benutzer ausloggen
router.post('/logout', logoutUser);

// UC06: Rezensionen eines Benutzers anzeigen
router.get('/users/:userId/reviews', getUserReviews);

export default router;

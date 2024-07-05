import express from 'express';
import { getBookByISBN, addNewBook } from '../controller/bookController.js';
import { registerUser, loginUser, logoutUser, getUserReviews } from '../controller/userController.js';
import { addReview, deleteReview } from '../controller/reviewController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// UC01: Buch nach ISBN suchen
router.get('/books/:isbn', getBookByISBN);

// UC02: Neues Buch erfassen
router.post('/books', upload.single('book_image'), addNewBook);

// UC03: review zu einem Buch hinzufügen
router.post('/reviews', addReview);

// UC07: review löschen
router.delete('/reviews/:reviewId', deleteReview);

// UC04: Benutzer registrieren
router.post('/register', upload.single('profileImageUrl'), registerUser);

// UC05: Benutzer einloggen
router.post('/login', loginUser);

// UC05: Benutzer ausloggen
router.post('/logout', logoutUser);

// UC06: review eines Benutzers anzeigen
router.get('/users/:userId/reviews', getUserReviews);

router.get('/topreviewer', getTopReviewer);

router.post('/:userId/favorites', addReviewToFavorites);

export default router;

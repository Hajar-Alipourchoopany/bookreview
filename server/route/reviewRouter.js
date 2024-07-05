import express from 'express';
import { addReview, deleteReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

// UC03: Rezension zu einem Buch hinzufügen
reviewRouter.post('/', addReview);

// UC07: Rezension löschen
reviewRouter.delete('/:reviewId', deleteReview);

export default reviewRouter;

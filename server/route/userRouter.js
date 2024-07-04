import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserReviews,
} from '../controllers/userController.js';
import upload from '../services/upload.js';

const userRouter = express.Router();

// UC04: Benutzer registrieren
userRouter.post('/register', upload.single('profileImageUrl'), registerUser);

// UC05: Benutzer einloggen
userRouter.post('/login', loginUser);

// UC05: Benutzer ausloggen
userRouter.post('/logout', logoutUser);

// UC06: Rezensionen eines Benutzers anzeigen
userRouter.get('/:userId/reviews', getUserReviews);

export default userRouter;

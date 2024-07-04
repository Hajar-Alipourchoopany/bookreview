import express from 'express';
import cors from 'cors';
import './db/db.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middleware/errorHandler.js';
import userRouter from './route/userRouter.js';
import reviewRouter from './route/reviewRouter.js';
import bookRouter from './route/bookRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/users', userRouter);
app.use('/reviews', reviewRouter);
app.use('/books', bookRouter);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

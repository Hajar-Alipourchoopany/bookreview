import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const mongodbURI = process.env.MONGODB_URI;
mongoose.connect(mongodbURI).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


app.post('/api/books', async (req, res) => {
  try {
    const books = req.body;
    await Book.insertMany(books);
    res.status(201).send('Books saved successfully');
  } catch (error) {
    res.status(500).send('Error saving books');
  }
});


app.get('/api/books/top', async (req, res) => {
  try {
    const topBooks = await Book.find().sort({ edition_count: -1 }).limit(10);
    res.status(200).json(topBooks);
  } catch (error) {
    res.status(500).send('Error fetching top books');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


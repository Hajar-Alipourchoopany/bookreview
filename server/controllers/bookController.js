import axios from 'axios';
import Book from '../models/bookSchema.js';
import Review from '../models/reviewSchema.js';

// UC01: Buch nach ISBN suchen
export const getBookByISBN = async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const book = await Book.findOne({ isbn });

    if (!book) {
      return res
        .status(404)
        .json({ message: 'Buch nicht gefunden. Neues Buch erfassen.' });
    }

    const reviews = await Review.find({ isbn });
    res.status(200).json({ book, reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Neues Buch erfassen
export const addNewBook = async (req, res) => {
  try {
    const { title, author, isbn, subject_key, edition_count, releaseDate } = req.body;
    const book_image = req.file ? req.file.path : '';

    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res
        .status(400)
        .json({ message: 'Buch mit dieser ISBN existiert bereits' });
    }

    const newBook = new Book({
      title,
      author,
      isbn,
      book_image,
      edition_count, 
      releaseDate,
    });

    await newBook.save();
    res.status(201).json({message: 'Book added successfully'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// UC03: Fetch and Save Books
export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=50`);
    const data = response.data;
    return data.docs.map(book => ({
      title: book.title,
      author: book.author_name ? book.author_name.join(', ') : 'Unknown',
      isbn: book.isbn ? book.isbn[0] : 'N/A',
      subject_key: book.subject ? book.subject.join(', ') : 'N/A',
      edition_count: book.edition_count || 0,
      ratings_average: Math.random() * 5 
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


export const saveBooksToDB = async (books) => {
  try {
   
    await Book.deleteMany({});

    await Book.insertMany(books);
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
  }
};

export const fetchAndSaveBooks = async (req, res) => {
  try {
    const { query } = req.body;
    const books = await fetchBooks(query); 
    await saveBooksToDB(books);
    res.status(200).send('Books fetched and saved to MongoDB');
  } catch (error) {
    res.status(500).send('Error fetching and saving books');
  }
};
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

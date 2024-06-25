import Book from '../model/schema.js';
import Review from '../model/schema.js';

// UC01: Buch nach ISBN suchen
export const getBookByISBN = async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const book = await Book.findOne({ isbn });
    
    if (!book) {
      return res.status(404).json({ message: 'Buch nicht gefunden. Neues Buch erfassen.' });
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
    const { title, author, isbn } = req.body;
    const coverImageUrl = req.file ? req.file.path : '';

    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(400).json({ message: 'Buch mit dieser ISBN existiert bereits' });
    }

    const newBook = new Book({
      title,
      author,
      isbn,
      book_image,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
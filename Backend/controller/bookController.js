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

// UC02: Neues Buch erfassen
export const addNewBook = async (req, res) => {
  try {
    const { isbn, title, author, book_image } = req.body;
    let book = await Book.findOne({ isbn });

    if (book) {
      return res.status(400).json({ message: 'Buch existiert bereits.' });
    }

    book = new Book({ isbn, title, author, book_image });
    await book.save();
    res.status(201).json({ message: 'Buch erfolgreich hinzugefügt.', book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
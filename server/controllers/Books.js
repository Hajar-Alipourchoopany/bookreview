import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const addBook = async (req, res) => {
    const { title, author, editionCount, firstPublishYear, coverId } = req.body;
    
    const newBook = new Book({
        title,
        author,
        editionCount,
        firstPublishYear,
        coverId
    });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

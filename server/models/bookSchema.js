import mongoose from 'mongoose';
const { Schema } = mongoose;

// Book Schema
const bookSchema = new Schema({
  isbn: {
    type: String,
    required: [true, 'ISBN ist erforderlich'],
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Titel ist erforderlich'],
  },
  author: {
    type: String,
    required: [true, 'Autor ist erforderlich'],
  },
  book_image: {
    type: String,
  },
  edition_count: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Book Model
const Book = mongoose.model('Book', bookSchema);
export default Book;

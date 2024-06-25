import mongoose from 'mongoose';
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },profileImageUrl:{
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  reviews: [
    {
      review_id: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    }
  ]
});

// Book Schema
const bookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  book_image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Review Schema
const reviewSchema = new Schema({
  isbn: {
    type: String,
    required: true
  },
  review_text: {
    type: String,
    required: true
  },
  review_date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

// Models
const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);
const Review = mongoose.model('Review', reviewSchema);

export default { User, Book, Review };

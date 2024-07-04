import mongoose from 'mongoose';
const { Schema } = mongoose;

// Review Schema
const reviewSchema = new Schema({
  isbn: {
    type: String,
    required: [true, 'ISBN ist erforderlich'],
  },
  review_text: {
    type: String,
    required: [true, 'Rezensionstext ist erforderlich'],
  },
  review_date: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Benutzer-ID ist erforderlich'],
  },
  username: {
    type: String,
    required: [true, 'Benutzername ist erforderlich'],
  },
  rating: {
    type: Number,
    required: [true, 'Bewertung ist erforderlich'],
    min: 1,
    max: 5,
  },
});

// Review Model
const Review = mongoose.model('Review', reviewSchema);
export default Review;

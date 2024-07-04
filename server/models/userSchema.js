import mongoose from 'mongoose';
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Benutzername ist erforderlich'],
    unique: true,
  },
  profileImageUrl: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'E-Mail ist erforderlich'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Passwort ist erforderlich'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  reviews: [
    {
      review_id: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    },
  ],
});

// User Model
const User = mongoose.model('User', userSchema);
export default User;

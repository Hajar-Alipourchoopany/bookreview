import Review from '../model/schema.js';
import User from '../model/schema.js';

// UC03: Rezension zu einem Buch hinzufügen
export const addReview = async (req, res) => {
  try {
    const { isbn, review_text, user_id, rating } = req.body;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: 'Benutzer nicht gefunden.' });
    }

    const review = new Review({ isbn, review_text, user_id, username: user.username, rating });
    await review.save();

    user.reviews.push({ review_id: review._id });
    await user.save();

    res.status(201).json({ message: 'Rezension erfolgreich hinzugefügt.', review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
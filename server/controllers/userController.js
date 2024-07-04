import Book from '../models/bookSchema.js';
import Review from '../models/reviewSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Benutzerregistrierung
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const profileImageUrl = req.file ? req.file.path : req.body.profileImageUrl;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Alle Felder sind erforderlich' });
    }

    // Überprüfen, ob der Benutzer existiert
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Benutzer mit dieser E-Mail existiert bereits' });
    }

    // Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 12);

    // Neuen Benutzer erstellen
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImageUrl,
    });

    await newUser.save();

    // JWT Token erstellen
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Benutzerlogin
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Überprüfen, ob der Benutzer existiert
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Ungültige Anmeldedaten' });
    }

    // Passwort überprüfen
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Ungültige Anmeldedaten' });
    }

    // JWT Token erstellen
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status500().json({ message: error.message });
  }
};

// Benutzer ausloggen
export const logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: 'Benutzer erfolgreich ausgeloggt.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Bewertungen eines Benutzers anzeigen
export const getUserReviews = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('reviews.review_id');

    if (!user) {
      return res.status(404).json({ message: 'Benutzer nicht gefunden.' });
    }

    res.status(200).json(user.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

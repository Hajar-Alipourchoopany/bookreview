import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    editionCount: { type: Number },
    firstPublishYear: { type: Number },
    coverId: { type: String }
});

const Book = mongoose.model('Booksprojekt', bookSchema);

export default Book;

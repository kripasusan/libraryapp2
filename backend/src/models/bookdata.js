const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    image: String

});

var bookData = mongoose.model('bookData', BookSchema);

module.exports = bookData;

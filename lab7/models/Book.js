var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: {type: Date, default: Date.now},
},
  {collection:'lab7book'}
);
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Book = mongoose.model('lab7book',BookSchema);
module.exports = Book;

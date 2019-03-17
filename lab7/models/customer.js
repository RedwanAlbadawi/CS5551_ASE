var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    customer_id: String,
    customer_name: String,
    customer_email: String,
  },
  {collection:'lab7book'}
);

const Customer = mongoose.model('lab7book',CustomerSchema);
module.exports = Customer;

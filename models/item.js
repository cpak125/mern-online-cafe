const mongoose = require('mongoose');
// Ensure the Category model is processed by mongoose
// (for populating Menu Item queries)
require('./category');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);


const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    time: Date,
    type: Number,
    note: String,
    price: Number,
    icon: String,
    id: Number
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
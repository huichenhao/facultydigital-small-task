const mongoose = require('mongoose');

const RevenueSchema = new mongoose.Schema({
    month: { type: String, required: true },
    revenue: { type: Number, required: true },
});

module.exports = mongoose.model('Revenue', RevenueSchema);;
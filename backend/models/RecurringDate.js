// /backend/models/RecurringDate.js
const mongoose = require('mongoose');

const RecurringDateSchema = new mongoose.Schema({
  frequency: { type: String, required: true },
  interval: { type: Number, required: true },
  daysOfWeek: [String],
  nthDayOfMonth: Number,
  startDate: { type: Date, required: true },
  endDate: Date,
});

const RecurringDate = mongoose.model('RecurringDate', RecurringDateSchema);

module.exports = RecurringDate;

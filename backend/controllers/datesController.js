// /backend/controllers/datesController.js
const RecurringDate = require('../models/RecurringDate');

const saveRecurringDate = async (req, res) => {
  try {
    const recurringDate = new RecurringDate(req.body);
    await recurringDate.save();
    res.status(201).send({ message: 'Recurring date saved successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving recurring date' });
  }
};

const getRecurringDates = async (req, res) => {
  try {
    const dates = await RecurringDate.find();
    res.status(200).send(dates);
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving recurring dates' });
  }
};

module.exports = { saveRecurringDate, getRecurringDates };

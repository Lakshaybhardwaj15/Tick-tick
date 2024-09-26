// /backend/routes/datesRoutes.js
const express = require('express');
const { saveRecurringDate, getRecurringDates } = require('../controllers/datesController');
const router = express.Router();

router.post('/recurring-dates', saveRecurringDate);
router.get('/recurring-dates', getRecurringDates);

module.exports = router;

// /backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const datesRoutes = require('./routes/datesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/recurring_dates', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', datesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

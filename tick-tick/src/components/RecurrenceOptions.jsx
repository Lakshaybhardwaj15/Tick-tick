import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import './RecurrenceOptions.css';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(DateContext);

  const handleFrequencyChange = (e) => {
    setRecurrence((prev) => ({
      ...prev,
      frequency: e.target.value,
    }));
  };

  const handleIntervalChange = (e) => {
    setRecurrence((prev) => ({
      ...prev,
      interval: e.target.value ? parseInt(e.target.value) : 1, // Fallback to 1 if empty
    }));
  };

  return (
    <div className="recurrenceOptions">
      <label>
        Frequency:
        <select value={recurrence.frequency || 'daily'} onChange={handleFrequencyChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>

      <label>
        Every
        <input
          type="number"
          value={recurrence.interval || ''}
          onChange={handleIntervalChange}
          min="1"
        />
        {recurrence.frequency === 'daily' && ' days'}
        {recurrence.frequency === 'weekly' && ' weeks'}
        {recurrence.frequency === 'monthly' && ' months'}
        {recurrence.frequency === 'yearly' && ' years'}
      </label>
    </div>
  );
};

export default RecurrenceOptions;

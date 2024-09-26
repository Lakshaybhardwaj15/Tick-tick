import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import RecurrenceOptions from './RecurrenceOptions';
import './DatePicker.css';

const DatePicker = () => {
  const { selectedDate, setSelectedDate, endDate, setEndDate } = useContext(DateContext);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="styles.datePickerContainer">
      <form>
        <label htmlFor="startDate">Start Date:</label>
        <input
          id="startDate"
          type="date"
          value={selectedDate || ''}
          onChange={handleDateChange}
        />

        <label htmlFor="endDate">End Date (Optional):</label>
        <input
          id="endDate"
          type="date"
          value={endDate || ''}
          onChange={handleEndDateChange}
        />
      </form>

      <RecurrenceOptions />
    </div>
  );
};

export default DatePicker;

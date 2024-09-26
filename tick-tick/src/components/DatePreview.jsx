// /src/components/DatePicker/DatePreview.js
import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import './DatePicker.css';

const DatePreview = () => {
  const { recurrence } = useContext(DateContext);

  const generatePreviewDates = () => {
    // Logic to generate the recurring dates preview
    return ['Date1', 'Date2', 'Date3']; // Placeholder logic
  };

  const previewDates = generatePreviewDates();

  return (
    <div className="styles.datePreview">
      <h3>Recurring Dates Preview:</h3>
      <ul>
        {previewDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatePreview;

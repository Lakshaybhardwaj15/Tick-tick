import React, { useState, createContext } from 'react';

// Create the context
export const DateContext = createContext();

// Context Provider component
export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily',
    interval: 1,
  });

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        endDate,
        setEndDate,
        recurrence,
        setRecurrence,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

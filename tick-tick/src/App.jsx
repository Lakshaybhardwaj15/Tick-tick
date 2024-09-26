import React from 'react';
import { DateProvider } from './context/DateContext';
import DatePicker from './components/DatePicker';
import './App.css';

function App() {
  return (
    <DateProvider>
      <div className="{appContainer}">
        <h1>Recurring Date Picker</h1>
        <DatePicker />
      </div>
    </DateProvider>
  );
}

export default App;

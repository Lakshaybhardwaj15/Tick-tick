Tick_Tick is a customizable, reusable date picker component built with React. It allows users to select recurring dates with flexible recurrence patterns like daily, weekly, monthly, and yearly. This component is styled using modular CSS and managed with React's Context API.

Features:
Recurring Date Selection: Choose between daily, weekly, monthly, or yearly recurrences.
Customizable Intervals: Set custom intervals like every 2 weeks or every 3 months.
Day-Specific Selections: Select specific days of the week or the nth day of the month (e.g., the second Tuesday).
Date Range: Specify start and optional end dates for the recurrence.
Visual Calendar Preview: See a mini calendar showing the selected recurring dates.

Technologies Used:
React.js
Context API for state management
Module CSS for component-level styling
React Router for page navigation

Usage:
To access the Recurring Date Picker, navigate to /date-picker from the home page.
Customize your date selections, preview them on the mini-calendar, and adjust recurrence options as needed.

Project Structure:
src/components: Contains reusable components, including the DatePicker and RecurrenceOptions.
src/context: Manages global state for date selections.
src/styles: Contains module CSS for component-specific styling.

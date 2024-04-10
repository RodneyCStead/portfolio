// A component that displays a digital clock with a dropdown menu to select a timezone in Canada.
// The clock updates every second and displays the current time in the zone it was selected. 

import React, { useEffect, useState } from 'react';

function DigitalClock() {
  // Initialize state for time and timezone
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('America/St_Johns');

  // Use useEffect hook to create an interval that updates the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      // Convert the current date to a locale string using the selected timezone
      const currentTime = date.toLocaleTimeString('en-US', { timeZone: timezone, hour12: true });
      // Update the time state
      setTime(currentTime);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timezone]); // Re-run the effect when the timezone changes

  // Handle changes to the timezone select input
  const handleTimezoneChange = (event) => {
    // Update the timezone state
    setTimezone(event.target.value);
  };

  // Render the component
  return (
    <div className = "clockBacking">
      <div id="clockHeading">Canadian Time Zone Clock</div>
      <div id="clock" className="digitalClock">{time}</div>
      
      {/* Selector for the different timezones in Canada */}
      <select id="timezone" value={timezone} onChange={handleTimezoneChange}>
        <option value="America/St_Johns">Newfoundland Time Zone</option>
        <option value="America/Goose_Bay">Atlantic Time Zone</option>
        <option value="America/Toronto">Eastern Time Zone</option>
        <option value="America/Winnipeg">Central Time Zone</option>
        <option value="America/Edmonton">Mountain Time Zone</option>
        <option value="America/Vancouver">Pacific Time Zone (Pacific Standard Time)</option>
        <option value="America/Whitehorse">Pacific Time Zone (Pacific Daylight Time)</option>
      </select>
    </div>
  );
}

export default DigitalClock;
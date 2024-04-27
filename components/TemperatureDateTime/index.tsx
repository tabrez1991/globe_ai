"use client"

import React, { useState, useEffect } from 'react';
import TemperatureEmoji from '../TemperatureEmoji';
import { Box } from '@mui/material';

function TemperatureDateTime() {
  const [temperature, setTemperature] = useState<any>(''); // State for temperature
  const [dateTime, setDateTime] = useState(''); // State for date and time

  useEffect(() => {
    // Function to update temperature, date, and time
    const updateDateTime = () => {
      // Logic to fetch temperature (replace this with your logic to fetch temperature)
      const fetchedTemperature = <TemperatureEmoji temperature={'26°C'} />; // Example value

      // Get current date and time
      const now = new Date();
      const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
      const time = now.toLocaleTimeString(); // Format: HH:MM:SS

      // Update state with temperature, date, and time
      setTemperature(fetchedTemperature);
      setDateTime(`${date} ${time}`);
    };

    // Call updateDateTime initially
    updateDateTime();

    // Call updateDateTime every second (you can adjust the interval as needed)
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{temperature} {dateTime}</Box>
      <div></div>
    </div>
  );
}

export default TemperatureDateTime;

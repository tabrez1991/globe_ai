import React, { useState, useEffect } from 'react';

function TemperatureEmoji({ temperature }: any) {
  // State for emoji
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    // Function to determine emoji based on temperature and time
    const determineEmoji = (temperature: any) => {
      // Get current hour
      const currentHour = new Date().getHours();

      // Set default emoji as cloud
      let selectedEmoji = '☁️';

      // Determine emoji based on temperature and time
      if (currentHour >= 6 && currentHour < 18) { // Daytime
        if (temperature >= 25) {
          selectedEmoji = '☀️'; // Sun
        } else {
          selectedEmoji = '⛅'; // Sun behind cloud
        }
      } else { // Nighttime
        if (temperature >= 15) {
          selectedEmoji = '🌙'; // Moon
        } else {
          selectedEmoji = '🌧️'; // Cloud with rain
        }
      }

      // Update state with selected emoji
      setEmoji(selectedEmoji);
    };

    // Call determineEmoji initially
    determineEmoji(temperature);
  }, [temperature]); // Run effect whenever temperature changes

  return (
    <div style={{ marginRight: "10px" }}>{emoji} {temperature}</div>
  );
}

export default TemperatureEmoji;

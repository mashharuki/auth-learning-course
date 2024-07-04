import React, { useState } from 'react';

const Booking = () => {
  const [summary, setSummary] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/calendar/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          summary,
          startDateTime: new Date(startDateTime).toISOString(),
          endDateTime: new Date(endDateTime).toISOString(),
        }),
      });

      if (response.ok) {
        setMessage('Event created successfully!');
      } else {
        setMessage('Failed to create event.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error creating event.');
    }
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <a href={'/oauth2/authorization/google'}>Login with Google</a>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="startDateTime">Start Date & Time:</label>
          <input
            type="datetime-local"
            id="startDateTime"
            value={startDateTime}
            onChange={(e) => {
              console.log(e.target.value)
              console.log(new Date(e.target.value).toISOString())

              setStartDateTime(e.target.value)
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="endDateTime">End Date & Time:</label>
          <input
            type="datetime-local"
            id="endDateTime"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Booking;

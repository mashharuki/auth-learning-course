import axios from 'axios';

const Booking = () => {
  return (
    <div>
      <h1>Book an Appointment</h1>
      <a href={'/oauth2/authorization/google'}>Login with Google</a>
    </div>
  );
};

export default Booking;

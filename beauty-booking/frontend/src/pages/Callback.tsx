import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAccessToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        try {
          const response = await axios.post('http://localhost:8080/oauth2/callback/google', { code });
          localStorage.setItem('access_token', response.data.access_token);
          navigate('/booking');
        } catch (error) {
          console.error('Token exchange error:', error);
        }
      }
    };

    void getAccessToken();
  }, [navigate]);

  return (
    <div>
      <h1>Callback</h1>
    </div>
  );
};

export default Callback;

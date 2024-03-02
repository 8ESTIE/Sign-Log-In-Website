import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/navbar/Navbar';
import LoginContext from '../contexts/LoginContext';

function Login() {
  const { setIsLoggedIn } = useContext(LoginContext);

  const handleSubmit = async (formData) => {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          localStorage.setItem('loggedIn', 'true');
          setIsLoggedIn(true);
          console.log('Login successful');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
  };

  return (
    <div>
      <Navbar />
      <h1>Anmeldung</h1>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
    </div>
  );
}

export default Login;

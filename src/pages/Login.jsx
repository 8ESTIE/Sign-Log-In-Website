import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/navbar/Navbar';

function Login() {
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

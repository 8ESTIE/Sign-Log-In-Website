import React from 'react';
import RegForm from '../components/RegForm';
import Navbar from '../components/navbar/Navbar';

function Register() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Navbar />
        <h1>Registration</h1>
      <RegForm onSubmit={handleSubmit}></RegForm>
    </div>
  );
}

export default Register;

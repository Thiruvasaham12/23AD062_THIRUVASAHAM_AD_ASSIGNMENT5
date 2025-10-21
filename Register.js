import React, { useState } from 'react';

function Register({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Registration successful! Please login.');
      onSwitch();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="form-container">
      <h2>Register for MOVIE</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={onSwitch}>Login here</span>
      </p>
    </div>
  );
}

export default Register;
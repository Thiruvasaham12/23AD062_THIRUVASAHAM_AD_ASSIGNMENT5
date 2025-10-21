import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) return <Welcome />;

  return (
    <div className="App">
      {page === 'login' ? (
        <Login onLogin={handleLogin} onSwitch={() => setPage('register')} />
      ) : (
        <Register onSwitch={() => setPage('login')} />
      )}
    </div>
  );
}

export default App;
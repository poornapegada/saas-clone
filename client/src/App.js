import React from 'react';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import { isLoggedIn } from './utils';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Auth Demo</h1>
      {isLoggedIn() ? (
        <>
          <Dashboard />
          <button onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
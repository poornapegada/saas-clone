import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token); // ✅ Save token
        setMessage('Login successful! Token saved.');
        console.log('JWT Token:', data.token);
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Network error.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // ✅ Clear token
    setMessage('Logged out.');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
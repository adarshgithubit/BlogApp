import React, { useState } from 'react';

const SignUpForm = ({ onClose, onSignupComplete }) => {

console.log("hdhgd",onClose)

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSignup = (e) => {
    e.preventDefault();
     if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }
   
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    
    onSignupComplete(); 
    onClose();
  };


  return (
    <div className="popup-form">
    <h2>Sign Up</h2>
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button type="submit">Sign Up</button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </form>
  </div>
  )
}

export default SignUpForm
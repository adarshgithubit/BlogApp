import React, { useState } from 'react';

const SignIn = ({ onClose, onSigninComplete }) => {
    console.log("add",onSigninComplete)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();
        
        // Basic validation checks
        if (!username || !password) {
          alert('Both fields are required.');
          return;
        }
    
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        if (!storedUser) {
          alert('No user found. Please sign up first.');
          return;
        }
    
        // Validate user credentials

        if (storedUser.username === username && storedUser.password === password) {
          alert('Signed in successfully!');
          onSigninComplete();  // Call this to indicate successful sign-in
          onClose(); 
        
        } else {
          alert('Invalid username or password.');
        }
      };
  return (
    <div className="popup-form">
    <h2>Sign In</h2>
    <form onSubmit={handleSignin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={ onSigninComplete}>Sign In</button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </form>
  </div>
  )
}

export default SignIn
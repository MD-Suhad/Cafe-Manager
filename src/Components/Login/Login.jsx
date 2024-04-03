import React,{useState} from 'react';
import './Login';

const Login = () => {
   // State for storing username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State for storing login error message
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username and password (you can add more sophisticated validation here)
    if (username === 'exampleUser' && password === 'examplePassword') {
      // If credentials are correct, perform login actions (e.g., redirect to dashboard)
      console.log('Login successful');
      // For demonstration purposes, clear input fields after successful login
      setUsername('');
      setPassword('');
      setError('');
    } else {
      // If credentials are incorrect, display error message
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};


export default Login;
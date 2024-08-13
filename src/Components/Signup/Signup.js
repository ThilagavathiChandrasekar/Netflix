import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Predefined user credentials
  const predefinedUser = {
    email: 'user@example.com',
    password: 'password123',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      if (email === predefinedUser.email && password === predefinedUser.password) {
        alert('Login successful!');
        navigate('netflix-movie')
        // Redirect to the homepage or dashboard
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup logic (simple example, no actual registration happening)
      if (email && password) {
        alert('Signup successful! Please log in.');
        setIsLogin(true); // Switch to login after signup
      } else {
        setError('Please fill in all fields');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? (
            <>
              New to Netflix? <span onClick={() => setIsLogin(false)}>Sign up now.</span>
            </>
          ) : (
            <>
              Already have an account? <span onClick={() => setIsLogin(true)}>Sign in now.</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Signup;

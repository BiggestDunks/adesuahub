import React, { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // Track logged-in user

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log('Logged in as:', currentUser.email);
      } else {
        console.log('User logged out');
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          {/* Later: Add logout button or redirect */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
      )}

      <br />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AuthForm;

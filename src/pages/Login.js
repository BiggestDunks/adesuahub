import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="login-background">
      <form className="login-form" onSubmit={isSignup ? handleSignup : handleLogin}>
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Create Account" : "Log In"}</button>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="signup-link" onClick={toggleForm}>
            {isSignup ? "Log in" : "Sign up instead"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

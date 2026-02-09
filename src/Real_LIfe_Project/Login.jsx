import React, { useState } from "react";
import "./css/Login.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, googleProvider } from "../Real_LIfe_Project/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (loading) return; // prevent multiple clicks
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.log(error);
      // better error handling
      if (error.code === "auth/cancelled-popup-request") {
        alert("Popup cancelled. Try again.");
      } else if (error.code === "auth/popup-closed-by-user") {
        alert("Popup closed before completing login.");
      } else if (error.code === "auth/configuration-not-found") {
        alert("Check Firebase config & Google sign-in setup.");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <div className="divider"><span>OR</span></div>

        <button
          className="google-btn"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <FaGoogle /> {loading ? "Loading..." : "Continue with Google"}
        </button>

        <button className="facebook-btn">
          <FaFacebook /> Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;

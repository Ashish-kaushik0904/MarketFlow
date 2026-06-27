import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Backend URL - one place to change
const BACKEND_URL = "https://marketflow-backend-6wob.onrender.com";
const DASHBOARD_URL = "https://marketflow-dashboard-blond.vercel.app";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/login`, {
        email,
        password,
      });

      const token = res.data.token;
      const user = encodeURIComponent(JSON.stringify(res.data.user));

      // Redirect to dashboard with token
      window.location.assign(`${DASHBOARD_URL}?token=${token}&user=${user}`);

    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <span className="auth-logo-text">📈 MarketFlow</span>
        <h2>Welcome back!</h2>
        <p className="auth-subtitle">Login to access your dashboard</p>

        {error && <p className="auth-error">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
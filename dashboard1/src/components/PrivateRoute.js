import React, { useEffect, useState } from "react";

const FRONTEND_URL = "https://market-flow-five.vercel.app";

const PrivateRoute = ({ children }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // URL se token aaya hai toh localStorage mein save karo
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");
    const userFromURL = params.get("user");

    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);
      localStorage.setItem("user", decodeURIComponent(userFromURL));
      // URL clean karo
      window.history.replaceState({}, document.title, "/");
    }

    setReady(true);
  }, []);

  if (!ready) return null;

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  return children;
};

export default PrivateRoute;
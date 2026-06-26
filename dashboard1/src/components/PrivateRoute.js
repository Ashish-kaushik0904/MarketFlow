import React, { useEffect } from "react";

const PrivateRoute = ({ children }) => {

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
  }, []);

  const token = localStorage.getItem("token");

  if (!token) {
    document.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
};

export default PrivateRoute;
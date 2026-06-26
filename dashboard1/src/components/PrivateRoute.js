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
    document.location.href = "https://market-flow-8fxlw3a4x-ashish-kaushik0904s-projects.vercel.app/login";
    return null;
  }

  return children;
};

export default PrivateRoute;
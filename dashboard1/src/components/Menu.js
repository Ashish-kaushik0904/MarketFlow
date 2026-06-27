import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FRONTEND_URL = "https://market-flow-five.vercel.app";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || { name: "User" };
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", next);
    if (next) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("darkMode");
    document.body.classList.remove("dark");
    window.location.href = `${FRONTEND_URL}/login`;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="mf-brand">
        <span className="mf-brand-icon">📈</span>
        <span className="mf-brand-name">MarketFlow</span>
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => setSelectedMenu(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => setSelectedMenu(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => setSelectedMenu(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => setSelectedMenu(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => setSelectedMenu(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>

        <hr />

        <button className="dark-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="profile">
          <div className="avatar">{initials}</div>
          <p className="username">{user.name.split(" ")[0].toUpperCase()}</p>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
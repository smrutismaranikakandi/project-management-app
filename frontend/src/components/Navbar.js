import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={styles.navbar}>
    <div style={styles.logo}>Project Manager</div>
    <div style={styles.links}>
      <Link to="/" style={styles.link}>Dashboard</Link>
      <Link to="/projects" style={styles.link}>Projects</Link>
      <Link to="/tasks" style={styles.link}>Tasks</Link>
      <Link to="/login" style={styles.loginBtn}>Login</Link>
    </div>
  </nav>
);

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(90deg, #007bff, #0056b3)",
    padding: "12px 40px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: 500,
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  loginBtn: {
    backgroundColor: "#fff",
    color: "#007bff",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    fontWeight: "bold",
    marginLeft: "20px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

// Add hover effects dynamically
Object.assign(styles.link, {
  ":hover": {
    color: "#ffdd57",
    transform: "scale(1.05)",
  },
});
Object.assign(styles.loginBtn, {
  ":hover": {
    backgroundColor: "#0056b3",
    color: "#fff",
  },
});

export default Navbar;

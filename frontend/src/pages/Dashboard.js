import React, { useEffect, useState } from "react";
import { getProjects, getTasks } from "../services/api"; // Import both APIs

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProjects();
        const taskData = await getTasks();

        setProjects(projectData || []);
        setTasks(taskData || []);
        setError(null);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("⚠️ Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Summary stats
  const totalProjects = projects.length;
  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter((t) => t.status === "In Progress").length;
  const completedTasks = tasks.filter((t) => t.status === "Done").length;

  if (loading) return <p style={{ padding: 20 }}>⏳ Loading dashboard...</p>;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📊 Project Dashboard</h2>

      {error && (
        <p style={errorStyle}>
          {error}
        </p>
      )}

      {/* Statistics Cards */}
      <div style={cardContainer}>
        <div style={cardStyle}>
          <h3>Total Projects</h3>
          <p style={countStyle}>{totalProjects}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Tasks</h3>
          <p style={countStyle}>{totalTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3>In Progress</h3>
          <p style={{ ...countStyle, color: "#ff9800" }}>{inProgressTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3>Completed</h3>
          <p style={{ ...countStyle, color: "#4caf50" }}>{completedTasks}</p>
        </div>
      </div>
    </div>
  );
};

// ✅ CSS styles
const containerStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', sans-serif",
  background: "linear-gradient(to right, #eef2f3, #dfe9f3)",
  minHeight: "100vh",
};

const titleStyle = {
  color: "#007bff",
  marginBottom: "25px",
  fontSize: "28px",
  fontWeight: "600",
  textAlign: "center",
};

const cardContainer = {
  display: "flex",
  gap: "25px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "25px 30px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
  flex: "1 1 220px",
  textAlign: "center",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  cursor: "pointer",
};

const countStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  marginTop: "10px",
  color: "#007bff",
};

const errorStyle = {
  color: "red",
  background: "#ffe6e6",
  padding: "12px",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "20px",
};

export default Dashboard;

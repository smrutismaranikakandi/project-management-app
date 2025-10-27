import React, { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [editingProject, setEditingProject] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
      }
    };
    fetchProjects();
  }, []);

  
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) {
      alert("Project name cannot be empty");
      return;
    }

    try {
      const added = await addProject(newProject);
      setProjects([...projects, added]);
      setNewProject({ name: "", description: "" });
    } catch (err) {
      console.error("Error adding project:", err);
      alert("Failed to add project");
    }
  };

  
  const handleEdit = (project) => {
    setEditingProject(project);
    setNewProject({ name: project.name, description: project.description });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateProject(editingProject.id, newProject);
      setProjects(
        projects.map((p) => (p.id === editingProject.id ? updated : p))
      );
      setEditingProject(null);
      setNewProject({ name: "", description: "" });
    } catch (err) {
      console.error("Error updating project:", err);
      alert("Failed to update project");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting project:", err);
      alert("Failed to delete project");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📁 Projects</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      
      <form
        onSubmit={editingProject ? handleUpdate : handleAdd}
        style={{
          marginBottom: "20px",
          background: "#f9f9f9",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          required
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editingProject ? "Update Project" : "Add Project"}
        </button>
      </form>

      
      {projects.length > 0 ? (
        <div>
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ margin: "0 0 5px 0" }}>{p.name}</h3>
              <p>{p.description}</p>
              <button
                onClick={() => handleEdit(p)}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects found</p>
      )}
    </div>
  );
};

export default Projects;

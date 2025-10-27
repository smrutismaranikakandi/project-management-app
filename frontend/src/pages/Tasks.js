import React, { useState } from "react";
import { createTask } from "../services/api";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleAdd = async () => {
    try {
      const newTask = {
        title: title,
        status: status,
        project_id: 1, // or whatever project you want
      };
      await createTask(newTask);
      alert("✅ Task added successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("❌ Failed to create task");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;

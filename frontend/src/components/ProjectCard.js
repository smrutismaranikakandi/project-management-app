import React from "react";

const TaskCard = ({ task, onStatusChange }) => {
  return (
    <div className="card">
      <h4>{task.title}</h4>
      <p><strong>Assigned To:</strong> {task.assigned_to || "Unassigned"}</p>
      <p><strong>Deadline:</strong> {task.deadline || "N/A"}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
    </div>
  );
};

export default TaskCard;

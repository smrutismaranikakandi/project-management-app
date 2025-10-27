import axios from "axios";

const API = "const BASE_URL = "https://project-management-backend.onrender.com";




export const getProjects = async () => {
  const res = await axios.get(`${API}/projects/`);
  return res.data;
};


export const addProject = async (project) => {
  const res = await axios.post(`${API}/projects/`, project);
  return res.data;
};

export const updateProject = async (id, project) => {
  const res = await axios.put(`${API}/projects/${id}`, project);
  return res.data;
};


export const deleteProject = async (id) => {
  const res = await axios.delete(`${API}/projects/${id}`);
  return res.data;
};



export const getTasks = async () => {
  const res = await axios.get(`${API}/tasks/`);
  return res.data;
};


export const createTask = async (taskData) => {
  const res = await axios.post(`${API}/tasks/`, taskData);
  return res.data;
};


export const getTasksByProject = async (projectId) => {
  const res = await axios.get(`${API}/tasks/project/${projectId}`);
  return res.data;
};

export const updateTask = async (taskId, updatedData) => {
  const res = await axios.put(`${API}/tasks/${taskId}`, updatedData);
  return res.data;
};


export const deleteTask = async (taskId) => {
  const res = await axios.delete(`${API}/tasks/${taskId}`);
  return res.data;
};

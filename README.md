# 🧩 Intelsmru – Project Management App

## 📘 Overview
**Intelsmru** is a full-stack **Project Management Application** designed to help teams and individuals organize, track, and manage their tasks efficiently.  
Users can create projects, assign tasks, monitor progress, and collaborate in real-time through an intuitive interface.

---

## 🌐 Live Links
- **Frontend (Vercel):** [https://project-management-app-75yn.vercel.app/](https://project-management-app-75yn.vercel.app/)
- **Backend (Render):** [https://project-management-app-nyci.onrender.com/](https://project-management-app-nyci.onrender.com/)

---

## ⚙️ Tech Stack

### Frontend:
- React.js  
- HTML, CSS, JavaScript  
- Axios for API requests  
- React Router for navigation  

### Backend:
- FastAPI (Python Framework)  
- MySQL Database  
- SQLAlchemy ORM  
- Pydantic for data validation  
- Render for deployment  

---

## 🧠 Features
✅ User Authentication (Signup/Login)  
✅ Create, View, Edit, and Delete Projects  
✅ Add and Manage Tasks within Projects  
✅ Assign Team Members to Tasks  
✅ View Task Status (Pending, In Progress, Completed)  
✅ Responsive UI for all devices  
✅ Real-time synchronization between frontend and backend  

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/smrutismaranikakandi/project-management-app.git
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 4. Access the app
Frontend → [http://localhost:3000](http://localhost:3000)  
Backend Docs → [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 🧾 Developer Information
**Name:** Smruti Smaranika Kandi  
**Project Name:** Intelsmru – Project Management App  
**Department:** MCA  
**Role:** Full Stack Developer  

---

## 🗄️ Example Database Configuration (for reference)
```python
SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://username:password@localhost:3306/intelsmru_db"
```

---

## 📄 License
This project is developed for academic and learning purposes.  
All rights reserved © 2025 Smruti Smaranika Kandi.

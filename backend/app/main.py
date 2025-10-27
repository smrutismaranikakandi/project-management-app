from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

# Initialize FastAPI app
app = FastAPI(title="Project Management API")

# Enable CORS (allow requests from frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== In-memory storage (temporary) =====
projects = []
tasks = []

# ===== Models =====
class Project(BaseModel):
    id: Optional[int] = None
    name: str
    description: str

class Task(BaseModel):
    id: Optional[int] = None
    title: str
    status: str
    project_id: Optional[int] = None


# ===== Root Route =====
@app.get("/")
def root():
    return {"message": "🚀 Project Management API is running successfully!"}


# ===== Project Routes =====
@app.get("/projects/", response_model=List[Project])
def get_projects():
    return projects


@app.post("/projects/", response_model=Project)
def create_project(project: Project):
    project.id = len(projects) + 1
    projects.append(project.dict())
    return project


@app.put("/projects/{id}", response_model=Project)
def update_project(id: int, updated_project: Project):
    for p in projects:
        if p["id"] == id:
            p["name"] = updated_project.name
            p["description"] = updated_project.description
            return p
    raise HTTPException(status_code=404, detail="Project not found")


@app.delete("/projects/{id}")
def delete_project(id: int):
    global projects
    projects = [p for p in projects if p["id"] != id]
    return {"message": "Project deleted successfully"}


# ===== Task Routes =====
@app.get("/tasks/", response_model=List[Task])
def get_tasks():
    return tasks


@app.post("/tasks/", response_model=Task)
def create_task(task: Task):
    task.id = len(tasks) + 1
    tasks.append(task.dict())
    return task


@app.put("/tasks/{id}", response_model=Task)
def update_task(id: int, updated_task: Task):
    for t in tasks:
        if t["id"] == id:
            t["title"] = updated_task.title
            t["status"] = updated_task.status
            t["project_id"] = updated_task.project_id
            return t
    raise HTTPException(status_code=404, detail="Task not found")


@app.delete("/tasks/{id}")
def delete_task(id: int):
    global tasks
    tasks = [t for t in tasks if t["id"] != id]
    return {"message": "Task deleted successfully"}

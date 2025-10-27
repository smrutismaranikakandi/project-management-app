from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import models, database

router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("/")
def get_projects(db: Session = Depends(database.get_db)):
    return db.query(models.Project).all()

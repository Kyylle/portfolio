from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Simulated database
projects = [
    {"id": 1, "title": "Portfolio Website", "description": "Built with Nuxt & FastAPI"},
    {"id": 2, "title": "E-commerce App", "description": "Vue + FastAPI backend"},
]

# Pydantic model for validation
class Project(BaseModel):
    title: str
    description: str


# ✅ GET all projects
@router.get("/projects", response_model=List[dict])
def get_projects():
    return projects


# ✅ POST a new project
@router.post("/projects", response_model=dict)
def create_project(project: Project):
    new_project = {"id": len(projects) + 1, "title": project.title, "description": project.description}
    projects.append(new_project)
    return new_project


# ✅ PUT (Update an entire project)
@router.put("/projects/{project_id}", response_model=dict)
def update_project(project_id: int, updated_project: Project):
    for project in projects:
        if project["id"] == project_id:
            project["title"] = updated_project.title
            project["description"] = updated_project.description
            return project
    raise HTTPException(status_code=404, detail="Project not found")


# ✅ PATCH (Partially update a project)
@router.patch("/projects/{project_id}", response_model=dict)
def patch_project(project_id: int, updated_project: Project):
    for project in projects:
        if project["id"] == project_id:
            if updated_project.title:
                project["title"] = updated_project.title
            if updated_project.description:
                project["description"] = updated_project.description
            return project
    raise HTTPException(status_code=404, detail="Project not found")


# ✅ DELETE a project
@router.delete("/projects/{project_id}")
def delete_project(project_id: int):
    global projects
    projects = [project for project in projects if project["id"] != project_id]
    return {"message": "Project deleted successfully"}

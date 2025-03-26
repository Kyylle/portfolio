from fastapi import APIRouter, HTTPException
from models.portfolio import Project, Certificate, Stack
from config import db

router = APIRouter(prefix="/portfolio", tags=["Portfolio"])

projects_collection = db["projects"]
certificates_collection = db["certificates"]
stacks_collection = db["stacks"]

# Helper functions for serialization
def serialize_document(doc, model):
    doc["_id"] = str(doc["_id"])
    return model(**doc)

# Project Routes
@router.get("/projects", response_model=list[Project], summary="Get all projects")
async def get_projects():
    projects = list(projects_collection.find({}))
    return [serialize_document(proj, Project) for proj in projects]

@router.post("/projects", response_model=Project, summary="Create a new project")
async def create_project(project: Project):
    project_dict = project.model_dump()
    result = projects_collection.insert_one(project_dict)
    project_dict["_id"] = str(result.inserted_id)
    return Project(**project_dict)

@router.put("/projects/{project_id}", response_model=Project, summary="Update a project")
async def update_project(project_id: str, project: Project):
    existing_project = projects_collection.find_one({"_id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    projects_collection.update_one({"_id": project_id}, {"$set": project.model_dump()})
    return project

@router.delete("/projects/{project_id}", summary="Delete a project")
async def delete_project(project_id: str):
    result = projects_collection.delete_one({"_id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": "Project deleted"}

# Certificate Routes
@router.get("/certificates", response_model=list[Certificate], summary="Get all certificates")
async def get_certificates():
    certificates = list(certificates_collection.find({}))
    return [serialize_document(cert, Certificate) for cert in certificates]

@router.post("/certificates", response_model=Certificate, summary="Create a new certificate")
async def create_certificate(certificate: Certificate):
    cert_dict = certificate.model_dump()
    result = certificates_collection.insert_one(cert_dict)
    cert_dict["_id"] = str(result.inserted_id)
    return Certificate(**cert_dict)

@router.delete("/certificates/{certificate_id}", summary="Delete a certificate")
async def delete_certificate(certificate_id: str):
    result = certificates_collection.delete_one({"_id": certificate_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Certificate not found")
    return {"message": "Certificate deleted"}

# Stack Routes
@router.get("/stacks", response_model=list[Stack], summary="Get all tech stacks")
async def get_stacks():
    stacks = list(stacks_collection.find({}))
    return [serialize_document(stack, Stack) for stack in stacks]

@router.post("/stacks", response_model=Stack, summary="Create a new tech stack")
async def create_stack(stack: Stack):
    stack_dict = stack.model_dump()
    result = stacks_collection.insert_one(stack_dict)
    stack_dict["_id"] = str(result.inserted_id)
    return Stack(**stack_dict)

@router.delete("/stacks/{stack_id}", summary="Delete a tech stack")
async def delete_stack(stack_id: str):
    result = stacks_collection.delete_one({"_id": stack_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Stack not found")
    return {"message": "Stack deleted"}

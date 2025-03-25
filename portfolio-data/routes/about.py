from fastapi import APIRouter, HTTPException
from models.about import About
from config import db

router = APIRouter(prefix="/about", tags=["About"])

about_collection = db["about"]

def serialize_about(about):
    about["_id"] = str(about["_id"]) 
    return About(**about)

@router.get("/", response_model=About, summary="Get About Info")
async def get_about():
    about = about_collection.find_one({})
    if not about:
        raise HTTPException(status_code=404, detail="About section not found")
    return serialize_about(about)

@router.post("/", response_model=About, summary="Create About Info")
async def create_about(about: About):
    if about_collection.find_one({}):
        raise HTTPException(status_code=400, detail="About section already exists")
    about_dict = about.model_dump()
    result = about_collection.insert_one(about_dict)
    about_dict["_id"] = str(result.inserted_id)
    return About(**about_dict)

@router.put("/", response_model=About, summary="Update About Info")
async def update_about(about: About):
    existing_about = about_collection.find_one({})
    if not existing_about:
        raise HTTPException(status_code=404, detail="About section not found")
    about_collection.update_one({"_id": existing_about["_id"]}, {"$set": about.model_dump()})
    return about

@router.delete("/", summary="Delete About Info")
async def delete_about():
    result = about_collection.delete_one({})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="About section not found")
    return {"message": "About section deleted"}

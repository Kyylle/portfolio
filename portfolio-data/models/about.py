# models/about.py
from pydantic import BaseModel

class About(BaseModel):
    full_name: str
    introduction: str
    description: str
    profile_image: str
    total_projects: int
    certificates: int
    years_experience: int

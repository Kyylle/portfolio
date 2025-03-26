from pydantic import BaseModel

class Project(BaseModel):
    image: str
    name: str
    description: str
    tech_stack: str
    total_projects: int

class Certificate(BaseModel):
    title: str
    organization: str
    date: str
    url: str

class Stack(BaseModel):
    name: str
    icon: str

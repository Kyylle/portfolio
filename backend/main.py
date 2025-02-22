import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.projects import router as projects_router  # Import projects router

app = FastAPI()

# Allow Nuxt frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Nuxt dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register the router
app.include_router(projects_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to my FastAPI backend!"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

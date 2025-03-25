# main.py
from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Import the about router
from routes.about import router as about_router

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Portfolio API")

# Include the "About" router
app.include_router(about_router)

# Root Route
@app.get("/", summary="Root Endpoint")
async def root():
    return {"message": "Welcome to the Portfolio API"}

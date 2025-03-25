# main.py
from fastapi import FastAPI
from dotenv import load_dotenv
import os

from routes.about import router as about_router

load_dotenv()

app = FastAPI(title="Portfolio API")

app.include_router(about_router)

@app.get("/", summary="Root Endpoint")
async def root():
    return {"message": "Welcome to the Portfolio API"}

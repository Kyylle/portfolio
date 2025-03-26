# main.py
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

from routes.about import router as about_router
from routes.portfolio import router as portfolio_router
load_dotenv()

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from your Nuxt app
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

app.include_router(about_router)
app.include_router(portfolio_router)

@app.get("/", summary="Root Endpoint")
async def root():
    return {"message": "Welcome to the Portfolio API"}

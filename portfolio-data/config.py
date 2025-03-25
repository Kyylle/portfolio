import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = "portfolio"

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

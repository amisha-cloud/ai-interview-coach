from pymongo import MongoClient

MONGO_URL = "mongodb+srv://amishaeduofficial_db_user:jZd3fVSkXlVF3kZh@ai-interview.hxroiri.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(MONGO_URL)

db = client["ai_interview"]
users_collection = db["users"]

print("Database connected successfully ✅")
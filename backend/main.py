from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil

import uuid
import os
from datetime import datetime

from handlers.document_handler import extract_document
from gemini_service import ask_gemini, extract_topics

app = FastAPI()

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Global Course Object
# -----------------------------
course = {
    "id": 1,
    "title": "",
    "filename": "",
    "extension": "",
    "text": "",
    "units": []
}

# -----------------------------
# Home
# -----------------------------
@app.get("/")
def home():
    return {"message": "Backend is working"}

# -----------------------------
# Upload Study Material
# -----------------------------
@app.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    global course

    extension = os.path.splitext(file.filename)[1]

    filename_without_extension = os.path.splitext(file.filename)[0]

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    unique_filename = (
        f"{timestamp}_{uuid.uuid4().hex[:8]}_{filename_without_extension}{extension}"
    )

    file_path = os.path.join("uploads", unique_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    document = extract_document(file_path)

    course["filename"] = document["filename"]
    course["extension"] = document["extension"]
    course["text"] = document["text"]
    course["title"] = document["filename"].rsplit(".", 1)[0]
    course["units"] = []

    return {
        "message": "Study material uploaded successfully",
        "course": course["title"]
    }

# -----------------------------
# Extract Topics
# -----------------------------
@app.post("/extract-topics")
def extract_topics_api():

    global course

    if not course["text"]:
        return {
            "error": "No study material uploaded."
        }

    course["units"] = extract_topics(course["text"])

    return {
        "course": course
    }

# -----------------------------
# Ask AI
# -----------------------------
class QuestionRequest(BaseModel):
    question: str


@app.post("/ask")
def ask_question(request: QuestionRequest):

    global course

    if not course["text"]:
        return {
            "error": "No study material uploaded."
        }

    answer = ask_gemini(
        course["text"],
        request.question
    )

    return {
        "answer": answer
    }

# -----------------------------
# Get Course
# -----------------------------
@app.get("/course")
def get_course():

    return {
        "course": course
    }
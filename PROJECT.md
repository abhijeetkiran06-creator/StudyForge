# 🚀 StudyForge

> AI-powered study assistant that transforms any educational document into an interactive learning experience.

---

# Vision

StudyForge helps students upload study material and instantly receive:

* AI-powered summaries
* Topic extraction
* Flashcards
* MCQs
* Mind maps
* Progress tracking
* Personalized study plans

Supported study materials include:

* PDF
* DOCX
* PPTX
* TXT
* Markdown

Future support:

* EPUB
* HTML
* Images (OCR)
* Multiple documents per course

---

# Current Architecture

```
Study Material
        │
        ▼
Document Extraction Layer
        │
        ▼
Course Engine
        │
        ▼
Gemini AI
        │
        ▼
Frontend
```

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Axios

## Backend

* FastAPI
* Gemini 2.5 Flash
* PyMuPDF
* python-docx
* python-pptx

---

# Current Folder Structure

```
backend/

handlers/
services/
models/
routes/
utils/
uploads/

frontend/

components/
pages/
services/
hooks/
context/
styles/
```

---

# Completed Sprints

## Sprint 1

* Backend created
* Gemini API integrated

---

## Sprint 2

* PDF upload
* AI chat

---

## Sprint 3

* React frontend
* Chat interface

---

## Sprint 4

* Tailwind UI
* Reusable components

---

## Sprint 5

* Study page
* Topic UI prototype

---

## Sprint 6

* Sidebar
* Progress UI

---

## Sprint 7

* AI topic extraction
* Backend APIs

---

## Sprint 8

* Dynamic backend preparation

---

## Sprint 8.5

✅ Generic document extraction

* PDF
* DOCX
* PPTX
* TXT
* Markdown

Single upload endpoint

Course object

Unique filenames

---

# Current Sprint

## Sprint 8.6

In Progress

Tasks:

* Git setup
* GitHub repository
* Upload validation
* Better AI prompt
* Better error handling
* Documentation

---

# Planned Sprints

## Sprint 9

Dynamic Course Engine

* AI generated units
* AI generated topics
* Dynamic Study page

---

## Sprint 10

Learning Engine

* Summaries
* Flashcards
* MCQs
* Explain topic
* Mind maps

---

## Sprint 11

Dashboard

* Progress tracking
* Course statistics
* Daily goals

---

## Sprint 12

Authentication

* Login
* Signup
* User profiles
* Saved courses

---

## Sprint 13

Production Release

* Deployment
* Performance optimization
* Final UI polish

---

# Architectural Decisions

* Backend must support multiple document formats.
* Frontend must never depend on a specific subject.
* AI should analyze any educational document.
* Components should remain reusable.
* Backend returns structured course data.
* One upload endpoint for every supported document.

---

# Current Supported Formats

* PDF
* DOCX
* PPTX
* TXT
* Markdown

---

# Future Features

* OCR
* EPUB support
* HTML support
* Audio transcription
* Video lecture transcription
* Collaborative notes
* AI tutor mode
* Study planner
* Revision reminders
* Spaced repetition
* Multiple documents per course

---

# Known Issues

* Topic extraction prompt needs to be generalized.
* Frontend still uses temporary topic data.
* Multi-document support not implemented.
* Progress persistence not implemented.

---

# Development Rules

1. One sprint at a time.
2. Test after every major change.
3. No unnecessary refactoring.
4. Architecture before features.
5. Every feature must support any educational document.
6. Commit after every completed sprint.
7. Keep PROJECT.md updated.

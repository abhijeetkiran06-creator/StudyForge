import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


# -----------------------------
# Ask questions from the notes
# -----------------------------
def ask_gemini(notes, question):

    prompt = f"""
You are a study assistant.

Answer ONLY from these notes.

If the answer is not present in the notes, say:
"I couldn't find that in the uploaded notes."

Notes:
{notes}

Question:
{question}
"""

    response = model.generate_content(prompt)

    return response.text


# -----------------------------
# Extract units and topics
# -----------------------------
def extract_topics(notes):

    prompt = f"""
You are an expert university teacher.

Read the study material below.

Extract every unit heading and every topic under each unit.

If the document has no units, create one unit called "General".

Return ONLY valid JSON.

Do NOT write markdown.

Do NOT explain anything.

Return in exactly this format:

[
  {{
    "unit": "Unit 1",
    "topics": [
      "Introduction",
      "History",
      "Vision"
    ]
  }},
  {{
    "unit": "Unit 2",
    "topics": [
      "Deployment Models",
      "Service Models"
    ]
  }}
]

Study Material:

{notes}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown if Gemini returns ```json
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()

    elif text.startswith("```"):
        text = text.replace("```", "").replace("```", "").strip()

    try:
        return json.loads(text)

    except Exception:

        return {
            "error": "Gemini returned invalid JSON",
            "raw": text
        }
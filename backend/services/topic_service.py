from services.gemini_client import model
import json

def extract_topics(notes):

    prompt = f"""
You are StudyForge, an AI study assistant specialized in analyzing educational material.

Your task is to analyze the uploaded study material and organize it into a logical course structure.

Instructions:

1. Identify the highest-level sections of the material.
2. If explicit Units, Modules, Chapters, or Lessons exist, preserve them.
3. If no clear sections exist, infer logical sections based on the document structure and group related topics together.
4. Under each section, extract the important study topics.
5. Preserve the original order of the document.
6. Do not invent topics that are not supported by the material.
7. Keep topic names concise and meaningful.

Return ONLY valid JSON.

Do NOT include markdown.

Do NOT explain your reasoning.

Return exactly in this format:

[
  {{
    "unit": "Unit 1",
    "topics": [
      "Topic A",
      "Topic B"
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
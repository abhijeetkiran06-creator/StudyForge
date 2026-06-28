import os
from docx import Document


def extract_docx(file_path):

    document = Document(file_path)

    text = []

    for paragraph in document.paragraphs:
        text.append(paragraph.text)

    return {
        "filename": os.path.basename(file_path),
        "extension": ".docx",
        "text": "\n".join(text)
    }
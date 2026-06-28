import os
import fitz


def extract_pdf(file_path):

    document = fitz.open(file_path)

    text = ""

    for page in document:

        text += page.get_text()

    document.close()

    return {
        "filename": os.path.basename(file_path),
        "extension": ".pdf",
        "text": text
    }
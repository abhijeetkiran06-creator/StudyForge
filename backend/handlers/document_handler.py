import os

from handlers.pdf_handler import extract_pdf
from handlers.docx_handler import extract_docx
from handlers.pptx_handler import extract_pptx
from handlers.txt_handler import extract_txt
from handlers.md_handler import extract_md


EXTRACTORS = {
    ".pdf": extract_pdf,
    ".docx": extract_docx,
    ".pptx": extract_pptx,
    ".txt": extract_txt,
    ".md": extract_md,
}


def extract_document(file_path):

    extension = os.path.splitext(file_path)[1].lower()

    extractor = EXTRACTORS.get(extension)

    if extractor is None:
        raise ValueError(f"Unsupported file type: {extension}")

    return extractor(file_path)
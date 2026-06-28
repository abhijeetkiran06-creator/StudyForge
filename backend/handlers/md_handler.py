import os


def extract_md(file_path):

    with open(file_path, "r", encoding="utf-8") as file:

        text = file.read()

    return {
        "filename": os.path.basename(file_path),
        "extension": ".md",
        "text": text
    }
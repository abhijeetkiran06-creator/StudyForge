import os


def extract_txt(file_path):

    with open(file_path, "r", encoding="utf-8") as file:

        text = file.read()

    return {
        "filename": os.path.basename(file_path),
        "extension": ".txt",
        "text": text
    }
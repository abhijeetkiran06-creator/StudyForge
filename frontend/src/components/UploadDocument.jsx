import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadDocument() {

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();

    async function uploadFile() {

        if (!file) {
            alert("Please select a document.");
            return;
        }

        try {

            setUploading(true);

            const formData = new FormData();

            formData.append("file", file);

            await axios.post(
                "http://127.0.0.1:8000/upload",
                formData
            );

            alert("Study material uploaded successfully!");

            navigate("/study");

        } catch (err) {

            console.error(err);

            console.log(err.response);

            alert(err.response?.data?.detail || err.message);

        } finally {

            setUploading(false);

        }

    }

    return (

        <div className="bg-white rounded-2xl shadow p-6 mb-8">

            <h2 className="text-2xl font-semibold mb-2">

                Upload Study Material

            </h2>

            <p className="text-slate-500 mb-6">

                Supported formats:
                PDF • DOCX • PPTX • TXT • MD

            </p>

            <div className="flex gap-4">

                <input
                    type="file"
                    accept=".pdf,.docx,.pptx,.txt,.md"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button
                    onClick={uploadFile}
                    disabled={uploading}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 disabled:opacity-50"
                >

                    {uploading ? "Uploading..." : "Upload"}

                </button>

            </div>

        </div>

    );

}

export default UploadDocument;
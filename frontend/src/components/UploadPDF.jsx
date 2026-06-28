import { useState } from "react";
import axios from "axios";

function UploadPDF() {

    const [file,setFile]=useState(null);

    const uploadFile = async()=>{

        const formData = new FormData();

        formData.append("file",file);

        await axios.post(

            "http://127.0.0.1:8000/upload",

            formData

        );

        alert("PDF Uploaded");

    }

    return(

        <div className="bg-zinc-800 p-6 rounded-2xl mb-10 flex gap-4">

            <input

            type="file"

            onChange={(e)=>setFile(e.target.files[0])}

            />

            <button

            className="bg-green-600 px-5 rounded-xl"

            onClick={uploadFile}

            >

                Upload

            </button>

        </div>

    )

}

export default UploadPDF
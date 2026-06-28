import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function ChatBox() {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {

    bottomRef.current?.scrollIntoView({
        behavior: "smooth"
    });

}, [messages, loading]);

    const askQuestion = async () => {

        if (!question.trim()) return;

        setLoading(true);

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/ask",
                {
                    question: question
                }
            );

            setMessages([
                ...messages,
                {
                    question,
                    answer: response.data.answer
                }
            ]);

            setQuestion("");

        } catch (error) {

            console.log(error);

        }

        setLoading(false);

    }

    return (

        <div className="w-full max-w-4xl">

            <div className="space-y-5 mb-10">

                {
                    messages.map((msg,index)=>(

                        <div key={index}>

                            <div className="flex justify-end">

                                <div className="bg-blue-600 p-4 rounded-2xl max-w-xl">

                                    {msg.question}

                                </div>

                            </div>

                            <div className="flex justify-start mt-3">

                                <div className="bg-zinc-700 p-4 rounded-2xl max-w-xl">

                                    <ReactMarkdown>
                                        {msg.answer}
                                    </ReactMarkdown>

                                </div>

                            </div>

                        </div>

                    ))
                }

                {
                    loading &&

                    <div className="flex gap-2 p-4">

                        <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce"></div>

                        <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-100"></div>

                        <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-200"></div>

                    </div>
                }

            </div>


            <div className="flex gap-3 mb-10">

                <input

                    className="flex-1 bg-zinc-800 rounded-xl p-4 outline-none"

                    value={question}

                    onChange={(e)=>setQuestion(e.target.value)}

                    onKeyDown={(e)=>{

                        if(e.key==="Enter")
                        {
                            askQuestion()
                        }

                    }}

                    placeholder="Ask anything..."

                />

                <button

                    className="bg-green-600 px-8 rounded-xl"

                    onClick={askQuestion}

                >

                    Send

                </button>

            </div>

            <div ref={bottomRef}></div>

        </div>

    )
}

export default ChatBox
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { getSummary } from "../../../services/studyApi";

function LearnStage({ topic, onContinue }) {

    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (topic) {

            generateSummary();

        }

    }, [topic]);

    async function generateSummary() {

        if (!topic) return;

        try {

            setSummary("");
            setLoading(true);

            const result = await getSummary(topic.title);

            setSummary(result.summary);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    }

    return (

        <Card>

            <h1 className="text-3xl font-bold mb-6">

                {topic.title}

            </h1>

            <h2 className="text-xl font-semibold mb-3">

                Overview

            </h2>

            <div className="prose prose-lg max-w-none">

                {loading ? (

                    <div className="space-y-3 animate-pulse">

                        <div className="h-8 w-2/3 bg-slate-200 rounded"></div>

                        <div className="h-4 bg-slate-200 rounded"></div>

                        <div className="h-4 bg-slate-200 rounded"></div>

                        <div className="h-4 w-5/6 bg-slate-200 rounded"></div>

                    </div>

                ) : (

                    <ReactMarkdown>

                        {summary}

                    </ReactMarkdown>

                )}

            </div>

            <div className="mt-10 border-t pt-6">

                <h3 className="text-xl font-semibold mb-2">

                    ✔ Learn Complete

                </h3>

                <p className="text-slate-600 mb-6">

                    Ready to remember this topic?

                </p>

                <Button onClick={onContinue}>

                    Continue →

                </Button>

            </div>

        </Card>

    );

}

export default LearnStage;
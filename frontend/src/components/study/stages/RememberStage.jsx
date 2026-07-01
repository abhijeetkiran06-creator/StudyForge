import { useEffect, useState } from "react";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { getFlashcards } from "../../../services/studyApi";

function RememberStage({ topic }) {

    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (topic) {
            loadFlashcards();
        }

    }, [topic]);

    async function loadFlashcards() {

        try {

            setLoading(true);

            const data = await getFlashcards(topic.title);

            setCards(data.flashcards);

            setCurrentIndex(0);
            setShowAnswer(false);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <Card>

                <h2 className="text-2xl font-semibold">

                    Generating Flashcards...

                </h2>

            </Card>

        );

    }

    if (cards.length === 0) {

        return (

            <Card>

                <p>No flashcards found.</p>

            </Card>

        );

    }

    const card = cards[currentIndex];

    return (

        <Card>

            <h1 className="text-3xl font-bold mb-8">

                🧠 Remember

            </h1>

            <p className="text-slate-500 mb-4">

                Card {currentIndex + 1} of {cards.length}

            </p>

            <div className="border rounded-2xl p-10 min-h-[220px] flex items-center justify-center text-center">

                <h2 className="text-2xl font-semibold">

                    {showAnswer ? card.answer : card.question}

                </h2>

            </div>

            <div className="flex gap-4 mt-8">

                <Button
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                </Button>

                <Button
                    variant="secondary"
                    disabled={currentIndex === cards.length - 1}
                    onClick={() => {

                        setCurrentIndex(currentIndex + 1);
                        setShowAnswer(false);

                    }}
                >
                    Next →
                </Button>

            </div>

        </Card>

    );

}

export default RememberStage;
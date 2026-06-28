import Card from "../ui/Card";
import Button from "../ui/Button";

function TopicContent({ topic }) {

    if (!topic) {

        return (

            <Card>

                <h2 className="text-xl font-semibold">

                    Select a topic

                </h2>

            </Card>

        );

    }

    return (

        <Card>

            <h1 className="text-3xl font-bold mb-6">

                {topic.title}

            </h1>

            <h2 className="text-xl font-semibold mb-3">

                Summary

            </h2>

            <p className="text-[#64748B] mb-8">

                {topic.summary}

            </p>

            <div className="flex gap-3 flex-wrap">

                <Button>Summary</Button>

                <Button variant="secondary">

                    Flashcards

                </Button>

                <Button variant="secondary">

                    MCQs

                </Button>

                <Button variant="secondary">

                    Explain

                </Button>

                <Button variant="secondary">

                    Mind Map

                </Button>

            </div>

        </Card>

    );

}

export default TopicContent;
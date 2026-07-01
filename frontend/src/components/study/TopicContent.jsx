import { useState } from "react";

import LearnStage from "./stages/LearnStage";
import RememberStage from "./stages/RememberStage";
import PracticeStage from "./stages/PracticeStage";
import MasterStage from "./stages/MasterStage";

import Card from "../ui/Card";

function TopicContent({ topic }) {

    const [stage, setStage] = useState("learn");

    if (!topic) {

        return (

            <Card>

                <h2 className="text-xl font-semibold">

                    Select a topic

                </h2>

            </Card>

        );

    }

    switch (stage) {

        case "learn":

            return (

                <LearnStage

                    topic={topic}

                    onContinue={() => setStage("remember")}

                />

            );

        case "remember":

            return (

                <RememberStage

                    topic={topic}

                />

            );

        case "practice":

            return (

                <PracticeStage

                    topic={topic}

                />

            );

        case "master":

            return (

                <MasterStage

                    topic={topic}

                />

            );

        default:

            return null;

    }

}

export default TopicContent;
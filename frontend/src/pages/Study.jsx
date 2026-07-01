import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import TopicTree from "../components/study/TopicTree";
import TopicContent from "../components/study/TopicContent";

import { getCourse } from "../services/studyApi";

function Study() {

    const [units, setUnits] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTopics();
    }, []);

    async function loadTopics() {

        try {

            const course = await getCourse();

            const formattedUnits = course.units.map((unit, unitIndex) => ({

                unit: unit.unit,

                topics: unit.topics.map((title, topicIndex) => ({

                    id: `${unitIndex}-${topicIndex}`,

                    title,

                    completed: false,

                    difficulty: "Medium"

                }))

            }));

            setUnits(formattedUnits);

            if (
                formattedUnits.length > 0 &&
                formattedUnits[0].topics.length > 0
            ) {
                setSelectedTopic(formattedUnits[0].topics[0]);
            }

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    }

    function toggleTopic(id) {

        const updatedUnits = units.map(unit => ({

            ...unit,

            topics: unit.topics.map(topic =>

                topic.id === id
                    ? { ...topic, completed: !topic.completed }
                    : topic

            )

        }));

        setUnits(updatedUnits);

        if (selectedTopic) {

            for (const unit of updatedUnits) {

                const topic = unit.topics.find(
                    t => t.id === selectedTopic.id
                );

                if (topic) {

                    setSelectedTopic(topic);
                    break;

                }

            }

        }

    }

    if (loading) {

        return (

            <Layout>

                <h2 className="text-2xl font-semibold">

                    Loading Topics...

                </h2>

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-4">

                    <TopicTree
                        units={units}
                        selectedTopic={selectedTopic}
                        onTopicSelect={setSelectedTopic}
                        onToggle={toggleTopic}
                    />

                </div>

                <div className="col-span-8">

                    <TopicContent
                        topic={selectedTopic}
                    />

                </div>

            </div>

        </Layout>

    );

}

export default Study;
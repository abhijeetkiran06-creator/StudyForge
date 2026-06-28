import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import TopicNode from "./TopicNode";

function UnitNode({
    unit,
    selectedTopic,
    onTopicSelect,
    onToggle
}) {

    const [expanded, setExpanded] = useState(true);

    return (

        <div className="mb-4">

            <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 w-full text-left font-semibold text-[#111827] mb-2"
            >

                {expanded
                    ? <ChevronDown size={18}/>
                    : <ChevronRight size={18}/>
                }

                {unit.unit}

            </button>

            {expanded && (

                <div className="ml-6">

                    {unit.topics.map(topic => (

                        <TopicNode

                            key={topic.id}

                            topic={topic}

                            selected={
                                selectedTopic?.id === topic.id
                            }

                            onSelect={onTopicSelect}

                            onToggle={onToggle}

                        />

                    ))}

                </div>

            )}

        </div>

    );

}

export default UnitNode;
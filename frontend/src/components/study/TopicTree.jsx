import TopicNode from "./TopicNode";

function TopicTree({
    topics,
    selectedTopic,
    onTopicSelect,
    onToggle
}) {

    return (

        <div className="space-y-2">

            {topics.map((topic) => (

                <TopicNode
                    key={topic.id}
                    topic={topic}
                    selected={selectedTopic.id === topic.id}
                    onSelect={onTopicSelect}
                    onToggle={onToggle}
                />

            ))}

        </div>

    );

}

export default TopicTree;
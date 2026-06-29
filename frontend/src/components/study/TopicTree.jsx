import UnitNode from "./UnitNode";

function TopicTree({
    units,
    selectedTopic,
    onTopicSelect,
    onToggle
}) {

    return (

        <div>

            {units.map((unit, index) => (

                <UnitNode

                    key={index}

                    unit={unit}

                    selectedTopic={selectedTopic}

                    onTopicSelect={onTopicSelect}

                    onToggle={onToggle}

                />

            ))}

        </div>

    );

}

export default TopicTree;
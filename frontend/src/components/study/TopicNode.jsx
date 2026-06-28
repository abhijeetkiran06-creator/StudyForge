import Checkbox from "../ui/Checkbox";
import Badge from "../ui/Badge";

function TopicNode({
    topic,
    selected,
    onSelect,
    onToggle
}) {

    return (

        <div
            onClick={() => {
             console.log("Clicked:", topic.title);
             alert(topic.title);
             onSelect(topic);
            }}
            className={`
                flex
                items-center
                justify-between
                p-3
                rounded-xl
                cursor-pointer
                transition
                mb-2

                ${
                    selected
                        ? "bg-[#EEF2FF] border border-[#4F46E5]"
                        : "hover:bg-[#F8FAFC]"
                }
            `}
        >

            <div className="flex items-center gap-3">

                <Checkbox
                    checked={topic.completed}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle(topic.id);
                    }}
                />

                <span className="font-medium">

                    {topic.title}

                </span>

            </div>

            <Badge
                color={
                    topic.difficulty === "Easy"
                        ? "success"
                        : topic.difficulty === "Medium"
                        ? "warning"
                        : "error"
                }
            >

                {topic.difficulty}

            </Badge>

        </div>

    );

}

export default TopicNode;
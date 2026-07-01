import Badge from "../../ui/Badge";

function StudyHeader({ topic }) {

    if (!topic) return null;

    return (

        <div className="mb-8">

            <p className="text-sm text-slate-500 mb-2">

                Java Programming / Unit 1

            </p>

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-4xl font-bold text-slate-900">

                        {topic.title}

                    </h1>

                    <p className="text-slate-500 mt-2">

                        AI-generated study material based on your uploaded notes.

                    </p>

                </div>

                <div className="flex gap-2">

                    <Badge variant="warning">

                        🟡 Medium

                    </Badge>

                    <Badge variant="info">

                        ⏱ 4 min read

                    </Badge>

                    <Badge variant="primary">

                        ✨ AI

                    </Badge>

                </div>

            </div>

        </div>

    );

}

export default StudyHeader;
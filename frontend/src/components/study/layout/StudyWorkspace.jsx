import Card from "../../ui/Card";

function StudyWorkspace() {

    return (

        <div className="space-y-6">

            <Card>

                <h2 className="text-xl font-semibold mb-4">

                    📖 Overview

                </h2>

            </Card>

            <Card>

                <h2 className="text-xl font-semibold mb-4">

                    ⭐ Key Points

                </h2>

            </Card>

            <Card>

                <h2 className="text-xl font-semibold mb-4">

                    📚 Important Terms

                </h2>

            </Card>

            <Card>

                <h2 className="text-xl font-semibold mb-4">

                    🎯 Exam Tips

                </h2>

            </Card>

        </div>

    );

}

export default StudyWorkspace;
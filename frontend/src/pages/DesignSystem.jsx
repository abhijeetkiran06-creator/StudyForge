import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import ProgressBar from "../components/ui/ProgressBar";
import Spinner from "../components/ui/Spinner";
import Checkbox from "../components/ui/Checkbox";
import { useState } from "react";

function DesignSystem() {

    const [checked, setChecked] = useState(false);

    return (

        <div className="min-h-screen bg-[#F8FAFC] p-10 space-y-8">

            <h1 className="text-4xl font-bold">
                StudyMind Design System
            </h1>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Buttons
                </h2>

                <div className="flex gap-4">

                    <Button>Primary</Button>

                    <Button variant="success">
                        Success
                    </Button>

                    <Button variant="secondary">
                        Secondary
                    </Button>

                </div>

            </Card>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Input
                </h2>

                <Input placeholder="Ask anything..." />

            </Card>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Progress
                </h2>

                <ProgressBar value={72} />

            </Card>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Badges
                </h2>

                <div className="flex gap-4">

                    <Badge>New</Badge>

                    <Badge color="success">
                        Completed
                    </Badge>

                    <Badge color="warning">
                        Review
                    </Badge>

                    <Badge color="error">
                        Difficult
                    </Badge>

                </div>

            </Card>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Spinner
                </h2>

                <Spinner />

            </Card>

            <Card>

                <h2 className="text-2xl font-semibold mb-5">
                    Checkbox
                </h2>

                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                />

            </Card>

        </div>

    );
}

export default DesignSystem;
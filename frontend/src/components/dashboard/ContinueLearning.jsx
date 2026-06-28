import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

function ContinueLearning() {

    return (

        <Card>

            <h2 className="text-xl font-semibold">

                Continue Learning

            </h2>

            <p className="mt-4">

                Cloud Computing

            </p>

            <div className="mt-4">

                <ProgressBar value={63}/>

            </div>

            <div className="mt-6">

                <Button>

                    Continue

                </Button>

            </div>

        </Card>

    );

}

export default ContinueLearning;
import Layout from "../components/layout/Layout";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import UploadDocument from "../components/UploadDocument";
import StatCard from "../components/dashboard/StatCard";

function Dashboard() {

    return (

        <Layout>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Welcome Back 👋

                    </h1>

                    <p className="text-[#64748B] mt-2">

                        Ready to continue learning?

                    </p>

                </div>

                <div className="text-right">

                    <p className="text-3xl">

                        🔥

                    </p>

                    <p>

                        7 Day Streak

                    </p>

                </div>

            </div>

            <UploadDocument />

            <div className="grid grid-cols-3 gap-6">

                <ContinueLearning/>

                <StatCard
                    title="Topics Completed"
                    value="28"
                    subtitle="Keep going!"
                />

                <StatCard
                    title="Study Time"
                    value="18 hrs"
                    subtitle="This month"
                />

            </div>

        </Layout>

    );

}

export default Dashboard;
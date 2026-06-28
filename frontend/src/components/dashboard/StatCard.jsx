import Card from "../ui/Card";

function StatCard({ title, value, subtitle }) {

    return (

        <Card>

            <p className="text-[#64748B] text-sm">
                {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
                {value}
            </h2>

            <p className="text-[#64748B] mt-3">
                {subtitle}
            </p>

        </Card>

    );

}

export default StatCard;
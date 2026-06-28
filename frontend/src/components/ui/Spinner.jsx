function Spinner() {

    return (

        <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-[#4F46E5] animate-bounce"></div>

            <div className="w-3 h-3 rounded-full bg-[#4F46E5] animate-bounce delay-100"></div>

            <div className="w-3 h-3 rounded-full bg-[#4F46E5] animate-bounce delay-200"></div>

        </div>

    )

}

export default Spinner
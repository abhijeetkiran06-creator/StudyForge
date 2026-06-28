function ProgressBar({

    value

}) {

    return (

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

            <div

                className="

                h-full

                bg-[#4F46E5]

                transition-all

                duration-500

                "

                style={{

                    width: `${value}%`

                }}

            />

        </div>

    )

}

export default ProgressBar
function Card({

    children,

    className = ""

}) {

    return (

        <div

            className={`

            bg-white

            rounded-2xl

            border

            border-[#E2E8F0]

            shadow-sm

            p-6

            ${className}

            `}

        >

            {children}

        </div>

    )

}

export default Card
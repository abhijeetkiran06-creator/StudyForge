function Card({

    children,

    className = "",

    padding = "p-6",

    shadow = "",

    hover = false,

}) {

    return (

        <div

            className={`

                bg-white

                rounded-2xl

                border border-slate-200

                ${padding}

                ${shadow}

                ${hover
                    ? "transition-all duration-200 hover:border-indigo-300 hover:shadow-md"
                    : ""}

                ${className}

            `}

        >

            {children}

        </div>

    );

}

export default Card;
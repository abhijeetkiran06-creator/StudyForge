function Button({

    children,

    onClick,

    variant="primary"

}){

    const styles={

        primary:

        "bg-[#4F46E5] hover:bg-[#4338CA] text-white",

        success:

        "bg-[#10B981] hover:bg-[#059669] text-white",

        secondary:

        "bg-white border border-gray-300 text-gray-700"

    }

    return(

        <button

        onClick={onClick}

        className={`

        px-6

        py-3

        rounded-xl

        font-medium

        transition

        ${styles[variant]}

        `}

        >

            {children}

        </button>

    )

}

export default Button
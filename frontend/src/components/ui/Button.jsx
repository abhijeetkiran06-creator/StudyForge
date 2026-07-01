function Button({

    children,

    onClick,

    variant = "primary",

    className = "",

    disabled = false,

    type = "button",

}) {

    const variants = {

        primary: `
            bg-indigo-600
            text-white
            hover:bg-indigo-700
            shadow-sm
        `,

        secondary: `
            bg-slate-100
            text-slate-700
            hover:bg-slate-200
        `,

        ghost: `
            bg-transparent
            text-slate-700
            hover:bg-slate-100
        `,

        danger: `
            bg-red-500
            text-white
            hover:bg-red-600
        `

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`

                px-5

                py-2.5

                rounded-xl

                font-medium

                transition-all

                duration-200

                disabled:opacity-50

                disabled:cursor-not-allowed

                ${variants[variant]}

                ${className}

            `}

        >

            {children}

        </button>

    );

}

export default Button;
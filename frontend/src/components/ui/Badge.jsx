function Badge({

    children,

    color = "primary"

}) {

    const colors = {

        primary:

        "bg-indigo-100 text-indigo-700",

        success:

        "bg-green-100 text-green-700",

        warning:

        "bg-yellow-100 text-yellow-700",

        error:

        "bg-red-100 text-red-700"

    }

    return(

        <span

        className={`

        px-3

        py-1

        rounded-full

        text-sm

        font-medium

        ${colors[color]}

        `}

        >

            {children}

        </span>

    )

}

export default Badge
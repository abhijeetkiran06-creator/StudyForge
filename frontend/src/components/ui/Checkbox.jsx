import { Check } from "lucide-react";

function Checkbox({

    checked,

    onClick

}) {

    return (

        <button

            onClick={onClick}

            className={`

            w-6

            h-6

            rounded-md

            border-2

            flex

            items-center

            justify-center

            transition

            ${checked

                ? "bg-[#10B981] border-[#10B981]"

                : "border-gray-300"

            }

            `}

        >

            {

                checked &&

                <Check

                    size={16}

                    color="white"

                />

            }

        </button>

    )

}

export default Checkbox
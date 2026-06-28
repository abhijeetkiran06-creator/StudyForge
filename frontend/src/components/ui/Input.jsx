function Input({
    value,
    onChange,
    placeholder,
    type = "text",
    onKeyDown,
    disabled = false
}) {

    return (

        <input
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            placeholder={placeholder}

            className="

            w-full

            px-4

            py-3

            rounded-xl

            border

            border-[#E2E8F0]

            bg-white

            text-[#0F172A]

            placeholder:text-[#64748B]

            outline-none

            transition

            focus:ring-2

            focus:ring-[#4F46E5]

            focus:border-[#4F46E5]

            disabled:bg-gray-100

            "

        />

    )

}

export default Input
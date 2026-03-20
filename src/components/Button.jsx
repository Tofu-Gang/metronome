function Button({onClick, icon}) {
    return (
        <button
            className="
                flex justify-center items-center
                border-5 border-[#e4f876] rounded-full
                size-15 sm:size-20 m-1 p-2 cursor-pointer"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default Button;

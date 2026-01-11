function Button({onClick, icon}) {
    return (
        <button
            className="cursor-pointer border-5 border-[#e4f876] rounded-full size-fit m-1 p-2 flex justify-center items-center"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default Button;

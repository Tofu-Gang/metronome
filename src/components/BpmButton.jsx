function BpmButton({onClick, icon}) {
    return (
        <button
            className="cursor-pointer border-5 border-[#e4f876] rounded-full w-20 h-20 flex justify-center items-center"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default BpmButton;

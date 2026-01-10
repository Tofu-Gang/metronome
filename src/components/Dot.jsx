function Dot({ horizontalPosition, hidden }) {
    return (
        <div
            className={`absolute ${horizontalPosition}-1/23 top-12/30 w-3 h-3 bg-[#e4f876] rounded ${hidden && "hidden"}`}
        >
        </div>
    );
}

export default Dot;

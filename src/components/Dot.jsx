function Dot({ leftMargin, hidden }) {
    return (
        <div
            className={`absolute top-[calc(50%-75px)] left-[${leftMargin}] w-3.5 h-3.5 bg-[#e4f876] rounded ${hidden ? "hidden" : ""}`}>
        </div>
    );
}

export default Dot;

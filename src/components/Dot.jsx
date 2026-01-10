function Dot({ horizontalPosition, hidden }) {
    return (
        <div
            style={{
                position: "absolute",
                left: `${horizontalPosition}`,
                top: "calc(50% - 75px)",
                transform: "translateX(-50%)",
                width: "12px",
                height: "12px",
                background: "#e4f876",
                borderRadius: "30%",
                display: hidden ? "none" : "block"
            }}
        >
        </div>
    );
}

export default Dot;

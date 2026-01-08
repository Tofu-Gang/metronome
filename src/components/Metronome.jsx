import trapezoid from "../assets/lichoblběžník.png";
import { useState, useRef } from "react";

function Metronome() {
    const armPositionLookup = ["-rotate-30", "rotate-30"];
    const [armPositionIndex, setArmPositionIndex] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [bpm, setBpm] = useState(80);
    const timerRef = useRef(null);

    function startTimer() {
        timerRef.current = setInterval(
            () => setArmPositionIndex((current) => (current + 1) % 2),
            60000 / bpm);
    }

    function clearTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function toggleTimer() {
        if(isRunning) {
            clearTimer();
        } else {
            startTimer();
        }
        setRunning((current) => !current);
    }

    return (
        <>
            <div className="fixed bottom-22 inset-x-0 mx-auto max-w-lg bg-gray-100 text-[#e4f876] font-[Rubik]">
                <h1 className="text-9xl text-center">{bpm}</h1>
                <img src={trapezoid} alt="An's trapezoid"/>
                <div
                    className={`fixed bottom-22 inset-x-0 mx-auto inline-block w-3.5 h-112.5 bg-[#e4f876] origin-bottom rounded-xl mb-1 ${isRunning ? armPositionLookup[armPositionIndex] : ""} transition duration-${60000 / bpm} linear`}
                ></div>
            </div>
            <button
                className="fixed bottom-0 inset-x-0 left-110 cursor-pointer border-5 border-[#e4f876] text-[#e4f876] rounded-full w-20 h-20 flex justify-center items-center text-5xl"
                onClick={() => {
                    setBpm((current) => current + 1);
                    clearTimer();
                    startTimer();
                }}
            >
                ✚
            </button>
            <button
                className="fixed bottom-0 inset-x-0 mx-auto cursor-pointer border-5 border-[#e4f876] text-[#e4f876] rounded-full w-20 h-20 flex justify-center items-center text-5xl"
                onClick={toggleTimer}
            >
                {isRunning ? "❚❚" : "▶"}︎
            </button>
        </>
    );
}

export default Metronome;

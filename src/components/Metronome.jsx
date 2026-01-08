import trapezoid from "../assets/lichoblběžník.png";
import { useState, useCallback } from "react";
// https://justinmahar.github.io/react-use-precision-timer/?path=/docs/home--docs
import { useTimer } from "react-use-precision-timer";
import plusIcon from "../icons/plus.jsx";
import fasterPlusIcon from "../icons/fasterPlus.jsx";
import minusIcon from "../icons/minus.jsx";
import fasterMinusIcon from "../icons/fasterMinus.jsx";
import playIcon from "../icons/play.jsx";
import pauseIcon from "../icons/pause.jsx";

function Metronome() {
    const armPositionLookup = ["-rotate-30", "rotate-30"];
    const [armPositionIndex, setArmPositionIndex] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [bpm, setBpm] = useState(80);

    const callback = useCallback(() => setArmPositionIndex((current) => (current + 1) % 2), []);
    const timer = useTimer({delay: 60000 / bpm}, callback);

    function startTimer() {
        timer.start();
    }

    function clearTimer() {
        timer.stop();
    }

    function toggleTimer() {
        if (isRunning) {
            clearTimer();
        } else {
            startTimer();
        }
        setRunning((current) => !current);
    }

    return (
        <>
            <div className="fixed bottom-22 inset-x-0 mx-auto max-w-lg text-[#e4f876] font-[Rubik]">
                <h1 className="text-9xl text-center">{bpm}</h1>
                <img src={trapezoid} alt="An's trapezoid"/>
                <div
                    className={`fixed bottom-22 inset-x-0 mx-auto inline-block w-3.5 h-112.5 bg-[#e4f876] 
                    origin-bottom rounded-xl mb-1 ${isRunning ? armPositionLookup[armPositionIndex] : ""} 
                    transition duration-${Math.floor(60000 / bpm)} linear`}
                ></div>
            </div>
            <button
                className="fixed bottom-2 inset-x-0 left-170 cursor-pointer border-5 border-[#e4f876] rounded-full
                w-20 h-20 flex justify-center items-center text-5xl"
                onClick={() => {
                    setBpm((current) => current + 1);
                    clearTimer();
                    startTimer();
                }}
            >
                {plusIcon}
            </button>
            <button
                className="fixed bottom-2 inset-x-0 left-192 cursor-pointer border-5 border-[#e4f876] rounded-full
                w-20 h-20 flex justify-center items-center text-5xl"
                onClick={() => {
                    setBpm((current) => current + 10);
                    clearTimer();
                    startTimer();
                }}
            >
                {fasterPlusIcon}
            </button>
            <button
                className="fixed bottom-2 inset-x-0 left-126 cursor-pointer border-5 border-[#e4f876] rounded-full
                w-20 h-20 flex justify-center items-center text-5xl"
                onClick={() => {
                    setBpm((current) => current - 1);
                    clearTimer();
                    startTimer();
                }}
            >
                {minusIcon}
            </button>
            <button
                className="fixed bottom-2 inset-x-0 left-104 cursor-pointer border-5 border-[#e4f876] rounded-full
                w-20 h-20 flex justify-center items-center text-5xl"
                onClick={() => {
                    setBpm((current) => current - 10);
                    clearTimer();
                    startTimer();
                }}
            >
                {fasterMinusIcon}
            </button>
            <button
                className="fixed bottom-2 inset-x-0 mx-auto cursor-pointer border-5 border-[#e4f876] rounded-full
                w-20 h-20 flex justify-center items-center text-5xl"
                onClick={toggleTimer}
            >
                {isRunning ? pauseIcon : playIcon}︎
            </button>
        </>
    );
}

export default Metronome;

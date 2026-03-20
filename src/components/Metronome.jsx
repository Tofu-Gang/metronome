import trapezoid from "/lichoblběžník.png";
import { useState, useCallback, useEffect } from "react";
// https://justinmahar.github.io/react-use-precision-timer/?path=/docs/home--docs
import { useTimer } from "react-use-precision-timer";
import plusIcon from "../icons/plus.jsx";
import fasterPlusIcon from "../icons/fasterPlus.jsx";
import minusIcon from "../icons/minus.jsx";
import fasterMinusIcon from "../icons/fasterMinus.jsx";
import playIcon from "../icons/play.jsx";
import pauseIcon from "../icons/pause.jsx";
// https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
import useSound from 'use-sound';
import clickSound from "/click.mp3";
import Button from "./Button.jsx";

function Metronome() {
    const armPositionLookup = ["-rotate-30", "rotate-30"];
    const [armPositionIndex, setArmPositionIndex] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [bpm, setBpm] = useState(80);
    const [playActive] = useSound(clickSound);
    const [leftDotHidden, setLeftDotHidden] = useState(false);
    const [rightDotHidden, setRightDotHidden] = useState(false);

    function blinkDot() {
        const dotHiddenLookup = [setRightDotHidden, setLeftDotHidden];
        dotHiddenLookup[armPositionIndex]((current) => !current);
        setTimeout(() => dotHiddenLookup[armPositionIndex]((current) => !current), 50);
    }

    useEffect(blinkDot, [armPositionIndex]);
    useEffect(playActive, [armPositionIndex]);

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

    function changeBpm(delta) {
        setBpm((current) => current + delta);

        if(isRunning) {
            clearTimer();
            startTimer();
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mt-10 mb-4">
                <h1 className="text-8xl sm:text-9xl text-[#e4f876] font-[Rubik]">{bpm}</h1>
            </div>
            <div className="relative">
                <img className="max-w-80 sm:max-w-lg" src={trapezoid} alt="An's trapezoid"/>
                <div
                    className={`absolute bottom-0 inset-x-0 mx-auto w-3 sm:w-4 h-3/4 bg-[#e4f876] 
                    origin-bottom rounded-xl mb-1 ${isRunning ? armPositionLookup[armPositionIndex] : ""} 
                    transition duration-${Math.floor(60000 / bpm)} ease-linear`}
                ></div>
                <div className={`absolute top-1/4 left-1/36 size-3 sm:size-4 bg-[#e4f876] rounded ${leftDotHidden && "hidden"}`} />
                <div className={`absolute top-1/4 right-1/36 size-3 sm:size-4 bg-[#e4f876] rounded ${rightDotHidden && "hidden"}`} />
            </div>
            <div className="flex justify-center mt-4">
                <Button onClick={() => changeBpm(-10)} icon={fasterMinusIcon} />
                <Button onClick={() => changeBpm(-1)} icon={minusIcon} />
                <Button onClick={toggleTimer} icon={isRunning ? pauseIcon : playIcon} />
                <Button onClick={() => changeBpm(1)} icon={plusIcon} />
                <Button onClick={() => changeBpm(10)} icon={fasterPlusIcon} />
            </div>
        </div>
    );
}

export default Metronome;

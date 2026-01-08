import trapezoid from "../assets/lichoblběžník.png";
import {useState, useCallback} from "react";
import {useTimer} from "react-use-precision-timer";

function Metronome() {
    const armPositionLookup = ["-rotate-30", "rotate-30"];
    const [armPositionIndex, setArmPositionIndex] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [bpm, setBpm] = useState(80);

    const callback = useCallback(() => setArmPositionIndex((current) => (current + 1) % 2), []);
    // The callback will be called every 1000 milliseconds.
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

    const playIcon = <>
        {/*Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)*/}
        {/*License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/148207/play-button*/}
        {/*<?xml version="1.0" encoding="iso-8859-1"?>*/}
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            width="50px"
            height="50px"
            className="pl-1"
        >
            <path
                fill="#e4f876"
                id="XMLID_308_"
                d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
                c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,
                2.28c-4.625-2.891-10.453-3.043-15.222-0.4 C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,
                37.728,328.12z"
            />
        </svg>
    </>

    const pauseIcon = <>
        {/*License: CC Attribution. Made by game-icons.net: https://game-icons.net/*/}
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#e4f876"
                d="M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162
                0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306
                65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162
                0 0 0 391.84 45h-65.68z"
            />
        </svg>
    </>

    const plusIcon = <>
        {/*<?xml version="1.0" encoding="utf-8"?>*/}
        {/*License: PD. Made by stephenhutchings: https://github.com/stephenhutchings/typicons.font*/}
        <svg
            fill="#e4f876"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2
                2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"
            />
        </svg>
    </>

    const minusIcon = <>
        {/*<?xml version="1.0" encoding="utf-8"?>*/}
        {/*License: PD. Made by stephenhutchings: https://github.com/stephenhutchings/typicons.font*/}
        <svg
            fill="#e4f876"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"
            />
        </svg>
    </>

    const fasterPlusIcon = <>
        {/*<?xml version="1.0" encoding="utf-8"?>*/}
        {/*License: Apache. Made by Iconscout: https://github.com/Iconscout/unicons*/}
        <svg
            fill="#e4f876"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.67,9.69,14,5.84a2.67,2.67,0,0,0-4,2.31h0L6,5.84A2.67,2.67,0,0,0,2,8.15v7.7a2.63,2.63,0,0,0,1.33,
                2.3,2.61,2.61,0,0,0,1.34.37A2.69,2.69,0,0,0,6,18.16l4-2.31h0a2.65,2.65,0,0,0,1.33,2.31,2.66,2.66,0,0,0,
                2.67,0l6.67-3.85a2.67,2.67,0,0,0,0-4.62ZM10,13.54,5,16.42a.67.67,0,0,1-1-.57V8.15a.67.67,0,0,1,1-.57l5,
                2.88Zm9.67-1L13,16.43a.69.69,0,0,1-.67,0,.66.66,0,0,1-.33-.58V8.15a.66.66,0,0,1,.33-.58.78.78,0,0,1,
                .34-.09.63.63,0,0,1,.33.09l6.67,3.85a.67.67,0,0,1,0,1.16Z"
            />
        </svg>
    </>

    const fasterMinusIcon = <>
        {/*<?xml version="1.0" encoding="utf-8"?>*/}
        {/*License: Apache. Made by Iconscout: https://github.com/Iconscout/unicons*/}
        <svg
            fill="#e4f876"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.67,5.85a2.63,2.63,0,0,0-2.67,0L14,8.15h0a2.67,2.67,0,0,0-4-2.31L3.33,9.69a2.67,2.67,0,0,0,0,
                4.62L10,18.16a2.66,2.66,0,0,0,2.67,0A2.65,2.65,0,0,0,14,15.85h0l4,2.31a2.69,2.69,0,0,0,1.33.36,2.61,
                2.61,0,0,0,1.34-.37A2.63,2.63,0,0,0,22,15.85V8.15A2.63,2.63,0,0,0,20.67,5.85ZM12,15.85a.66.66,0,0,
                1-.33.58.69.69,0,0,1-.67,0L4.33,12.58a.67.67,0,0,1,0-1.16L11,7.57a.67.67,0,0,1,.67,0,.66.66,0,0,1,
                .33.58Zm8,0a.67.67,0,0,1-1,.57l-5-2.88V10.46l5-2.88a.67.67,0,0,1,1,.57Z"
            />
        </svg>
    </>

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

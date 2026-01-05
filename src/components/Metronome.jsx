import trapezoid from "../assets/lichoblběžník.png";

function Metronome() {
    return (
        <div className="fixed bottom-0 inset-x-0 mx-auto max-w-lg bg-gray-100 text-[#e4f876] font-[Rubik]">
            <h1 className="text-9xl text-center">120</h1>
            <img src={trapezoid} alt="An's trapezoid"/>
            <div className="fixed bottom-0 inset-x-0 mx-auto inline-block w-3.5 h-112.5 bg-[#e4f876] origin-bottom-center rounded-xl mb-1"></div>
        </div>
    );
}

export default Metronome;

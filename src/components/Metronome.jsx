import trapezoid from "../assets/lichoblběžník.png";

function Metronome() {
    return (
        <div className="fixed bottom-0 inset-x-0 mx-auto max-w-lg bg-gray-100 text-[#e4f876] font-[Rubik]">
            <h1 className="text-9xl text-center">120</h1>
            <img src={trapezoid} alt="An's trapezoid"/>
        </div>
    );
}

export default Metronome;

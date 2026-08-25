import { useState, useMemo } from "react";
function App () {
    const [number, setNumber] = useState(1);

    const square = useMemo(() => {
        console.log("calculating square...");
        return number * number;
    }, [number]);

    return (
        <div>
            <h1>useMemo practice</h1>
            <h2>Number: {Number}</h2>
            <h2>Square:{Square}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Increment
            </button>
        </div>
    );
}

export default App;
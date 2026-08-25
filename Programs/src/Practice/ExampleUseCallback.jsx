import {useState, useCallback} from "react";
import child from "./child";

function App() {
    const [count, setCount] = useState(0);
    const showMessage = useCallback(() =>{
        alert("Hello from parent!");
    }, []);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <child showMessage = {showMessage} />
        </div>
    );
}

export default App;
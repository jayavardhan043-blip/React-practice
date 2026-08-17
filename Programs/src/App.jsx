import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Transition</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Box" : "Show Box"}
      </button>

      <div className={show ? "box show" : "box"}>
        Hello! I am a React box.
      </div>
    </div>
  );
}

export default App;
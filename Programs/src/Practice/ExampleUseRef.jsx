import React, { useEffect, useRef, useState } from "react";


const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name2;
  }, [name2]);

  function add() {
    setName2(name1);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter your name:"
        onChange={(e) => setName1(e.target.value)}
      />
      <button onClick={add}>Click</button>
      <h3>Current Name: {name2}</h3>
      <p>Previous Name: {prevName.current}</p>
    </div>
  );
};

export default App;

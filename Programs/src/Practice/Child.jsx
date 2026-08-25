import {memo} from "react";
function Child({showMessage}) {
    console.log("Child rendered");
    return (
        <button onClick={showMessage}>
            Show Message
        </button>
    );
}

export default memo(Child);
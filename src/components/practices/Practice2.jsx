import { useState } from "react";
import WinTracker from "./WinTracker";

export default function Practice2() {

    const [show, setShow] = useState(false);
    function showToggle() {
        setShow(prevState => !prevState)
    }

    return (
        <main className="container">
            <button onClick={showToggle} style={{ padding: "15px", cursor: "pointer"}}>
                Toggle Window size
            </button>
            {show && <WinTracker />}
        </main>
    );
}
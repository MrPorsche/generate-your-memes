import React, { useEffect, useState } from "react";

export default function WinTracker() {

    const [winSize, setWinSize] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    useEffect(() => {
        function handleWinSize() {    
            setWinSize({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            });
        }
        window.addEventListener("resize", handleWinSize);
        return function() {
            window.removeEventListener("resize", handleWinSize);
        }
    }, []);
    
    return (
        <>
            <h1>My Window width: {winSize.winWidth}</h1>
            <h1>My Window height: {winSize.winHeight}</h1>
        </>
    );
}
import React from "react";
import Canvas from "../components/Canvas";


function Game() {

    const draw = (context , count) => {
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        
       
    }
    return ( <Canvas draw={draw} width="800" height="500" style={{ backgroundColor: "#65ff00" }}/>);
}

export default Game;
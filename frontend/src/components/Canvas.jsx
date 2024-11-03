import React, { useEffect, useRef, useState } from "react";
import Player from "./Player"; // Ensure this path is correct relative to your file structure
import Pokemon from "./PokemonFetcher";

const Canvas = (props) => {
  

  const ref = useRef();
  const { draw, backgroundColor = "#ffffff", ...rest } = props;
  const [playerX, setPlayerX] = useState(100); // Initial player x-coordinate
  const [playerY, setPlayerY] = useState(100); // Initial player y-coordinate
  const [playerSpeed, setPlayerSpeed] = useState(5); // Movement speed
  const [playerImage, setPlayerImage] = useState("/images/player-right.png"); // Initial player image

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPlayerY((prevY) => prevY - playerSpeed);
          setPlayerImage("/images/player-up.png");
          break;
        case "ArrowDown":
          setPlayerY((prevY) => prevY + playerSpeed);
          setPlayerImage("/images/player-down.png");
          break;
        case "ArrowLeft":
          setPlayerX((prevX) => prevX - playerSpeed);
          setPlayerImage("/images/player-left.png");
          break;
        case "ArrowRight":
          setPlayerX((prevX) => prevX + playerSpeed);
          setPlayerImage("/images/player-right.png");
          break;
        default:
          break;
      }
    };

    const renderer = () => {
      // Clear canvas and set background color
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the player using draw function
      draw(context, playerX, playerY);

      // Request next frame of animation
      animationID = window.requestAnimationFrame(renderer);
    };

    let animationID = window.requestAnimationFrame(renderer);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationID);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [draw, playerX, playerY, playerSpeed, backgroundColor]); // Include all dependencies

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={ref} {...rest} />
      <Player x={playerX} y={playerY} size={40} imageSrc={playerImage} /> {/* Player component */}
      <Pokemon pokemonName="pikachu"   /> {/* PokemonFetcher component */}
    </div>
  );
};

export default Canvas;



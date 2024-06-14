const Player = ({ x, y, size, imageSrc }) => {
    return (
      <img
        src={imageSrc}
        alt="Player"
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: size,
          height: size,
        }}
      />
    );
  };
  
  export default Player;
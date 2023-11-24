import React, { useRef, useEffect, useState } from 'react';

const RoboMap = () => {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/coordinates/');

    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });

    socket.addEventListener('message', (event) => {
      const stringWithoutQuotes = event.data.slice(1, -1); // Remove the surrounding single quotes
      const correctedData = stringWithoutQuotes.replace(/'/g, '"');
      const newCoordinate = JSON.parse(correctedData);
      console.log(newCoordinate)
      setCoordinates((prevCoordinates) => [...prevCoordinates, newCoordinate]);
    });

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    const predefinedFilePath = process.env.PUBLIC_URL + '/map_peer_assignment-1.jpg';

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Plot coordinates on the canvas
      coordinates.forEach(coord => {
        plotCoordinate(ctx, coord);
      });
    };

    img.src = predefinedFilePath;
  }, [coordinates]);

  const plotCoordinate = (ctx, coord) => {
    const { x, y } = convertCoordinateToCanvas(coord);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  };

  const convertCoordinateToCanvas = (coord) => {
    // Convert world coordinates to canvas coordinates based on image specs
    const resolution = 0.050000;
    const origin = [-4.142630, -12.520201, 0.000000];

    const canvasX = canvasRef.current.width - (coord.x - origin[0]) / resolution;
    const canvasY = canvasRef.current.height - (coord.y - origin[1]) / resolution;
    return { x: canvasX, y: canvasY };
  };

  return (
    <div>
      {/* <button onClick={handleCoordinatesUpdate}>Update Coordinates</button> */}
      {canvasRef && (
        <div>
          <canvas ref={canvasRef} />
        </div>
      )}
    </div>
  );
};

export default RoboMap;
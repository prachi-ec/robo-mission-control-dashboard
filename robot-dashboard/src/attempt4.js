import React, { useRef, useEffect } from 'react';

const ImageUploader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const predefinedFilePath = process.env.PUBLIC_URL + '/map_peer_assignment-1.jpg';

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
    };

    img.onerror = (err) => {
      console.error("Error loading image:", err);
      if (err.type === 'error' && err.target.src === predefinedFilePath) {
        console.log('File does not exist or cannot be accessed.');
        // Handle the case where the file does not exist or cannot be accessed
      }
    };

    // Set the src, and let the events handle the loading success or failure
    img.src = predefinedFilePath;
  }, []);

  return (
    <div>
      {canvasRef && (
        <div>
          <canvas ref={canvasRef} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
import React, { useRef, useState } from 'react';
import sampleVideo from '../assets/sample.mp4';
import Play from "../assets/Play.png";
import image from "../assets/Aboutimage.png"

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause(); 
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full max-w-[800px] h-full mx-auto py-20 ">

          
      <video
        ref={videoRef}
        src={sampleVideo}
        className="w-full rounded cursor-pointer"
        onClick={handleVideoClick}
        playsInline
        
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-4xl"
        >
          <img src={Play} alt="Play" className="w-20 h-20" />
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;

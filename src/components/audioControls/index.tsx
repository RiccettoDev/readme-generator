import React, { useRef } from "react";
import backgroundMusic from '../../../public/background-music.mp3';
import { AudioContainer } from "./audio-controls";

const AudioControls: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioContainer>
      <audio
        src={backgroundMusic}
        autoPlay
        loop
        ref={audioRef}
        controls
      />
    </AudioContainer>
  );
};

export default AudioControls;

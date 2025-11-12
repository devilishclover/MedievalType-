import React, { useState, useRef } from 'react';
import "./styles/music.css";

const Music = ({ medievalMusic }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <button className="play-button" onClick={toggleMusic}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
            <audio ref={audioRef} loop>
                <source src={medievalMusic} type="audio/mpeg" />
            </audio>
        </>
    );
};

export default Music;
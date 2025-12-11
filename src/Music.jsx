import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import "./styles/music.css";

const Music = ({ medievalMusic }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);

    useEffect(() => {
        soundRef.current = new Howl({
            src: [medievalMusic],
            loop: true,
            autoplay: true,
            html5: true,
            onplay: () => setIsPlaying(true),
            onpause: () => setIsPlaying(false),
            onstop: () => setIsPlaying(false)
        });

        // Attempt to unlock audio on first user interaction if autoplay was blocked
        const unlockAudio = () => {
            if (soundRef.current && !soundRef.current.playing()) {
                soundRef.current.play();
            }
            cleanUpListeners();
        };

        const cleanUpListeners = () => {
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        };

        document.addEventListener('click', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);

        return () => {
            cleanUpListeners();
            if (soundRef.current) {
                soundRef.current.unload();
            }
        };
    }, [medievalMusic]);

    const toggleMusic = (event) => {
        if (soundRef.current) {
            if (soundRef.current.playing()) {
                soundRef.current.pause();
            } else {
                soundRef.current.play();
            }
        }
        if (event && event.target) {
            event.target.blur();
        }
    };

    return (
        <>
            <button className="play-button" onClick={toggleMusic}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </>
    );
};

export default Music;
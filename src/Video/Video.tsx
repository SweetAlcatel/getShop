import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

interface VideoProps {
    setState: (progress: number) => void
};

export const Video = ({ setState }: VideoProps) => {

    return (
        <div id='player'>
            <ReactPlayer url='https://www.youtube.com/watch?v=M7FIvfx5J10' 
            height='100vh'
            width='100%'
            muted={true}
            loop={true}
            playing={true}
            config={{
                youtube: {
                    playerVars: { showinfo: 0, autoplay: 1, controls: 0, disablekb: 1 }
                }
            }}
            onProgress={(progress) => {setState(progress.playedSeconds)}}
            />
        </div>
    );
};
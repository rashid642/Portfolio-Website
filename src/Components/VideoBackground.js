import React from "react";

import VideoCover from 'react-video-cover';
import { Projects } from "./Projects";

export const VideoBackground = () => {
    const videoOptions = {
        src: './Media/background-video2.mp4', // Replace with the actual path to your video file
        autoPlay: true,
        loop: true,
        muted: true,
    };
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height : '100%', zIndex: -1}}>
          <VideoCover videoOptions={videoOptions} />
        </div>
        //  <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1]">
      //  </div>
      );
};


import React, { useEffect, useState } from "react";

import VideoCover from 'react-video-cover';
import { Projects } from "./Projects";

export const VideoBackground = () => {
    const videoOptions = {
        src: './Media/background-video.mp4', // Replace with the actual path to your video file
        autoPlay: true,
        loop: true,
        muted: true,
    };
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: -1}}>
          <VideoCover videoOptions={videoOptions} />
        </div>
      );
};


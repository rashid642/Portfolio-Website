import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import VideoCover from 'react-video-cover';
import { Projects } from "./Projects";

const VideoBackground = () => {
    const videoOptions = {
        src: './Media/background-video.mp4', // Replace with the actual path to your video file
        autoPlay: true,
        loop: true,
        muted: true,
    };

    return (
        <div
        style={{
            position: 'stick',
            top: 0,
            left: 0,
            width: '100vw',  // 100% of the viewport width
            height: '100vh', // 100% of the viewport height
            zIndex: -1,
        }}
        >
      <VideoCover videoOptions={videoOptions} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

                <div className="text-white h-screen w-screen flex items-center justify-center flex-col p-20">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold mb-4">
                            Md. Rashid Aziz
                        </h1>
                        <p className="text-2xl mb-4">
                            <ReactTyped
                                strings={["Competetive Programmer", "Full Stack Devloper", "MERN Stack"]}
                                typeSpeed={50}
                                backSpeed={30}
                                loop
                            />
                        </p>
                    </div>
                </div>
                <h1> something ....</h1>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default VideoBackground;

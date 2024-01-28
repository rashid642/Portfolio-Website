import React from "react";

export const Cards2 = () => {
    return (
        <div className="flex items-center justify-center">
            <div className={`w-3/4 border-r-4 border-b-4 p-4 m-10 shadow-lg shadow-cyan-500/50 border-solid border-white bg-black bg-opacity-30 rounded-xl overflow-hidden shadow-lg flex max-md:flex-col max-md:w-11/12  max-md:p-0 max-md:m-2`}>
                {/* Left Side: YouTube Embedded Video */}
                <div className="w-1/2 bg-black items-center justify-center flex max-md:w-full">
                    {/* Replace the YouTube embed code with your actual video embed code */}
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/5UuFjbDgIJ4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Right Side: Title, Description, and Button */}
                <div className="w-1/2 p-4 max-md:w-full text-white">
                    <h1 className={`text-xl font-bold mb-2`}>College Space (Video Conferencing App) </h1>
                    <div class="border-b border-white"></div>
                    <h3 className="text-l mt-1 font-semibold">Handlebars, CSS, JS, NodeJS, MySQL</h3>
                    <div class="p-3">
                        <ul class="list-disc p-2 text-justify">
                            <li className="text-black-500">Developed a Web Application for educational purposes, similar to MS Teams.</li>
                            <li className="text-black-500">Implemented video conferencing (VC) features using <b>peerJS</b> and <b>socket.io</b>.</li>
                            <li className="text-black-500">Integrated file uploading functionality using <b>express‑upload</b>.</li>
                            <li className="text-black-500">Implemented authentication using <b>PassportJS</b> for secure access to the application.</li>
                        </ul>
                    </div>
                    <a
                        href="https://github.com/rashid642/college-space"
                        className="bg-white text-black py-2 px-4 rounded-md inline-block font-medium ml-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>

                </div>
            </div>
        </div>

    )
}

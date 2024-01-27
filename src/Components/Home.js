import React from "react";
import { ReactTyped } from "react-typed";
import YourPhoto from '../Media/MypicBW.jpeg';


export const Home = () => {
    return (
        <div id="home">
            <div className="flex items-center justify-center h-screen max-md:flex-col">
                {/* Left Part - Photo */}
                <div className="flex-1 p-4 flex items-center justify-center">
                    <img
                        src={YourPhoto} // Replace with your actual photo source
                        alt="Your Photo"
                        className="w-80 h-auto rounded-full"
                    />
                </div>

                {/* Right Part - Name and Description */}
                <div className="flex-1 p-4">
                    <div className="text-white h-screen flex items-center justify-center flex-col p-20  max-md:h-1/2">
                            <h1 className="text-3xl font-bold mb-4 max-md:text-4xl">
                                Md. Rashid Aziz
                            </h1>
                        <div className="w-full">
                            <p className="text-2xl text-center mb-4 max-md:text-3xl">
                                <ReactTyped
                                    strings={["Competetive Programmer", "Full Stack Devloper", "MERN Stack"]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </p>
                        </div>
                            <a href="https://drive.google.com/file/d/18wSPKfmloOWU-D8HsrdIaVEf_uwVXqUH/view" target="_blank" rel="noopener noreferrer">
                                <button class="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4 max-md:text-3xl max-md:px-8 max-md:py-3">
                                    View Resume
                                </button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
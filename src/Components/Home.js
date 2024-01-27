import React from "react";
import { ReactTyped } from "react-typed";
import YourPhoto from '../Media/MypicBW.jpeg';


export const Home = () => {
    return (
        <div id="home">
            <div className="flex items-center justify-center h-screen flex-wrap">
                {/* Left Part - Photo */}
                <div className="flex-1 p-4 flex items-center justify-center">
                    <img
                        src={YourPhoto} // Replace with your actual photo source
                        alt="Your Photo"
                        className="w-64 h-auto rounded-full"
                    />
                </div>

                {/* Right Part - Name and Description */}
                <div className="flex-1 p-4">
                    <div className="text-white h-screen flex items-center justify-center flex-col p-20">
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
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { ReactTyped } from "react-typed";
import YourPhoto from '../Media/Mypic.png';


export const Home = () => {
    return (
        <>
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
        </>
    )
}
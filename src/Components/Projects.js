import React from "react";
import { Cards1 } from "./Cards1";
import { Cards2 } from "./Cards2";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export const Projects = () => {
    return (
        <div id="projects" className="pt-16 ">
            <AnimatedOnScroll
                animationIn="none"
            >
                <h1 className="text-white text-center font-bold text-4xl mb-5">Projects Section</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll
                animationIn="none"
                duration="2000"
            >
                <Cards1 />
            </AnimatedOnScroll>
            <AnimatedOnScroll
                animationIn="none"
                duration="2000"
            >
                <Cards2 />
            </AnimatedOnScroll>
        </div>
    )
}
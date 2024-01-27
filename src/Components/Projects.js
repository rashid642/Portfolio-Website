import React from "react";
import { Cards1 } from "./Cards1";
import { Cards2 } from "./Cards2";

export const Projects = () => {
    return (
        <div id="projects">
        <h1 className="text-white text-center font-bold text-4xl mb-5">Projects Section</h1>
        {/* <div class="border-b border-white m-4 "></div>    */}
        <Cards1/>
        <Cards2/>
        </div>
    )
}
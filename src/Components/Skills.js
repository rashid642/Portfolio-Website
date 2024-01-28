import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faCodepen, faJava, faPython} from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faTerminal} from  '@fortawesome/free-solid-svg-icons'
import "../CSS/scrollBar.css"

export const Skills = () => {
    return (
        <div id="skills" className="pt-16">
        <h1 className="text-white text-center font-bold text-4xl mt-103">Skills</h1>
            <div class="grid grid-cols-4 gap-10 m-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-md:gap-4">
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">HTML</h1>
                    <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '80px' }} />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">CSS</h1>
                    <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">JAVASCRIPT</h1>
                    <FontAwesomeIcon icon={faJs} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">React</h1>
                    <FontAwesomeIcon icon={faReact} style={{ fontSize: '80px' }} className="smallcards"/>
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">NodeJS</h1>
                    <FontAwesomeIcon icon={faJs} style={{ fontSize: '80px' }} className="smallcards"/>
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">DSA</h1>
                    <FontAwesomeIcon icon={faTerminal} style={{ fontSize: '80px' }} className="smallcards"/>
                </div>

                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">MySQL</h1>
                    <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">C/C++</h1>
                    <FontAwesomeIcon icon={faCodepen} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">JAVA</h1>
                    <FontAwesomeIcon icon={faJava} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
                <div class="bg-slate-200 flex items-center justify-evenly h-32 rounded-lg shadow-lg shadow-red-500/50 hover:scale-110 transition-transform duration-200 max-md:flex-col max-md:h-36">
                    <h1 className="text-3xl font-bold max-md:text-xl max-md:p-2">Python</h1>
                    <FontAwesomeIcon icon={faPython} style={{ fontSize: '80px' }} className="smallcards" />
                </div>
            </div>
        </div>
    )
}
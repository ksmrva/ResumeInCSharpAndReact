import React, { useState, useEffect } from "react";
import Header from "./Header.jsx"
import Skills from "./Skills.jsx"
import Experience from "./Experience.jsx"
import Education from "./Education.jsx";
import Internships from "./Internships.jsx"
import './Resume.css'

function Resume() {
    
    return (
        <main>
            <table className="headerAndSkillsSection">
                <tbody>
                    <Header></Header>
                    <Skills></Skills>
                </tbody>
            </table>
            <Experience></Experience>
            <Education></Education>
            <Internships></Internships>
        </main>
    )

}
export default Resume;
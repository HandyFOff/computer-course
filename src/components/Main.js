import React from "react";
import About from "./about/About";
import Intro from "./intro/Intro";
import Program from "./program/Program";
import Quality from "./quality/Quality";
import Sponsers from "./sponsers/Sponsers";
import Start from "./start/Start";
import Teachers from "./teachers/Teachers";

export default function Main() {
    return (
        <main className="main">
            <Intro/>
            <div className="container">
                <About/>
                <Start/>
                <Quality/>
                <Sponsers/>
                <Program/>
                <Teachers/>
            </div>
        </main>
    )
}
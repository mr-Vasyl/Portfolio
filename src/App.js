import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Particles from "react-particles-js";

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Particles className={"particles"} params={particlesOpt}/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

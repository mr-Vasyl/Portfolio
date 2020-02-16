import React from 'react';

import s from './App.module.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";


function App() {
    return <div className={s.app}>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
}

export default App;

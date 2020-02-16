import React from 'react';

import s from './App.module.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contacts from "./component/Contacts/Contacts";
import Footer from "./component/Footer/Footer";


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

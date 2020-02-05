import React from 'react';
import styles from './Projects.module.css'
import BlockTitle from "./BlockTitle";
import Project from "./Project";
import {Fade} from "react-reveal";
import project from './assets/img/project.PNG'

function Projects() {
    const todoListImg ={
        backgroundImage: 'url(${todoListBgImg})',
    }
    const socialNetworkImg = {
        backgroundImage: 'url(${socialNetworkBgImg})',
    }
    const calculatorImg = {
        backgroundImage: 'url(${calculatorBgImg})',
    }
    return (
        <div className={styles.projects}>
            <Fade clear>
            <div className={styles.container}>
               <BlockTitle title={"Мої проекти"} />
                <div className={styles.projectsWrapper}>

                    <Project title={"To do List"}
                             style={todoListImg}
                             img={project}
                    description={"Tantas mollis propriae ne dudo, ei dico esse eros vix, vim suas discere phaedrum ea. Cu magna adversarium duo. Ei eam ornatus vivendo, quo an autem facilisi."}/>
                    <Project title={"Social Network"}
                             style={socialNetworkImg}
                             description={"Tantas mollis propriae ne duo, ei dico esse eros vix, vim suas discere phaedrum ea. Cu magna adversarium duo. Ei eam ornatus vivendo, quo an autem facilisi."}/>
                    <Project title={"Calculator"}
                             style={calculatorImg}
                             description={"Tantas mollis propriae ne duo, ei dico esse eros vix, vim suas discere phaedrum ea. Cu magna adversarium duo. Ei eam ornatus vivendo, quo an autem facilisi."}/>
                </div>
            </div>
            </Fade>
        </div>

    );
}

export default Projects;

import React from 'react';
import styles from './Projects.module.css'
import BlockTitle from "./BlockTitle";
import Project from "./Project";

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
            <div className={styles.container}>
               <BlockTitle title={"Мої проекти"} />
                <div className={styles.projectsWrapper}>
                    <Project title={"To do List"}
                             style={todoListImg}
                    description={"Lorem5 Lorem5Lorem5Lorem5"}/>
                    <Project title={"Social Network"}
                             style={socialNetworkImg}
                             description={"Lorem5 Lorem5Lorem5Lorem5"}/>
                    <Project title={"Calculator"}
                             style={calculatorImg}
                             description={"Lorem5 Lorem5Lorem5Lorem5"}/>
                    {/*<div className={styles.project}>*/}
                    {/*    <div className={styles.projectImg}>*/}
                    {/*        <a className={styles.btnShow} href=""> смотреть</a>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.projectTitle}>To do list</span>*/}
                    {/*    <span className={styles.description}>To doNetworkNetworkNetwNetworkNetworkNetworkNetworkorkNetwork list</span>*/}
                    {/*</div>*/}
                    {/*<div className={styles.project}>*/}
                    {/*    <div className={styles.projectImg}>*/}
                    {/*        <a className={styles.btnShow} href=""> смотреть</a>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.projectTitle}>Social Network</span>*/}
                    {/*    <span className={styles.description}>To doNetworkNetworkNetworkNetworkNetworkNetworkNetworkNetwork NetworkNetwork</span>*/}
                    {/*</div>*/}
                    {/*<div className={styles.project}>*/}
                    {/*    <div className={styles.projectImg}>*/}
                    {/*        <a className={styles.btnShow} href=""> смотреть</a>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.projectTitle}>Calculator</span>*/}
                    {/*    <span className={styles.description}>To dCNetworkNetworkNetworkNetworkNetworkNetworkNetworkNetworkalculatort</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    );
}

export default Projects;

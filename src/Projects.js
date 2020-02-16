import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from './Projects.module.css'
import BlockTitle from "./BlockTitle";
import Project from "./Project";

import project from './assets/img/Portfolio.png'


class Projects extends React.Component {
    constructor() {
        super();
        this.store = {
            state: [
                {
                    id: 1,
                    title: 'Social',
                    description: "Social description",
                    img: project,
                    link: "https://mr-vasyl.github.io/Portfolio/"
                },
                {
                    id: 2,
                    title: 'ReStore',
                    description: "ReStore description",
                    img: project,
                    link: "https://mr-vasyl.github.io/Portfolio/"
                },
                {
                    id: 3,
                    title: 'Portfolio',
                    description: "Portfolio description",
                    img: project,
                    link: "https://mr-vasyl.github.io/Portfolio/"
                },

            ]
        }
    }


    render() {
        let projectsElements =
            this.store.state
                .map(p => <Project title={p.title} description={p.description} img={p.img} key={p.id}
                                   link={p.link}/>);
        return (
            <ScrollableAnchor id={'projects'}>
                <div className={styles.projects}>
                    <div className={styles.container}>
                        <BlockTitle title={"WORKS"}/>
                        <div className={styles.projectsWrapper}>
                            {projectsElements}
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Projects;

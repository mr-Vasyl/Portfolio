import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from './Projects.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from "./Project";

import portfolio from '../../assets/img/Portfolio.png'
import social from '../../assets/img/social.png'
import reStore from '../../assets/img/reStore.png'

class Projects extends React.Component {
    constructor() {
        super();
        this.store = {
            state: [
                {
                    id: 1,
                    title: 'Social network',
                    description: "I used in work - Rest Api, React-Redux, Redux-Thunk, Redux-Form, Axios, React-Router, Reselect, Ant Design and Grid",
                    img: social,
                    link: "https://mr-vasyl.github.io/social/"
                },
                {
                    id: 2,
                    title: 'Bookstore',
                    description: "Used - test Service, React-Redux, Redux-Thunk, React-Router, and Bootstrap",
                    img: reStore,
                    link: "https://mr-vasyl.github.io/store/"
                },
                {
                    id: 3,
                    title: 'Portfolio',
                    description: "React-Particles for animation, local state for the class component, css-modules and Flexbox",
                    img: portfolio,
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

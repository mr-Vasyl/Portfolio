import React from 'react';
import styles from './Project.module.css'


function Project(props) {
    return (
        <div className={styles.project}>
            <img src={props.img} />
            <div className={styles.projectImg} style={props.style}>

                <a className={styles.btnShow} href="https://mr-vasyl.github.io/Portfolio/">Смотреть</a>
            </div>

            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;

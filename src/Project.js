import React from 'react';
import styles from './Project.module.css'

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} style={props.style}>
                <a className={styles.btnShow} href="">Смотреть</a>
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;

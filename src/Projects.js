import React from 'react';
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мої роботи</span>
                <div className={styles.projectsWrapper}>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=""> смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>To do list</span>
                        <span className={styles.description}>To do list</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=""> смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Social Network</span>
                        <span className={styles.description}>To do NetworkNetwork</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=""> смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Calculator</span>
                        <span className={styles.description}>To dCalculatort</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;

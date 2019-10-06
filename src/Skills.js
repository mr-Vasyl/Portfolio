import React from 'react';
import styles from './Skills.module.css'

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.blockTitle}>Мої скіли</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.skillsWrapper}>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt="icon"/>
                        </div>
                        <span className={styles.skillTitle}>JavaScript</span>
                        <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elitf. Nobis, nostrum.</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt="icon"/>
                        </div>
                        <span className={styles.skillTitle}>JavaScript</span>
                        <span className={styles.description}>JavaScript</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt="icon"/>
                        </div>
                        <span className={styles.skillTitle}>JavaScript</span>
                        <span className={styles.description}>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

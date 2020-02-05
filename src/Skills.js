import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill";
import reactIcon from './assets/img/react.svg'
import css from './assets/img/css.svg'
import js from './assets/img/jsLogo.svg'
import {Fade} from "react-reveal";
import BlockTitle from "./BlockTitle";


function Skills() {

    return (
        <div className={styles.skills}>
            <Fade clear>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <BlockTitle title={"Мої скіли"}/>
                    </div>

                    <div className={styles.skillsWrapper}>
                        <Skill icon={css} title={"Html/Css"}/>
                        <Skill icon={js} title={"JavaScript"}/>
                        <Skill icon={reactIcon} title={"React/Redux"}/>


                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;

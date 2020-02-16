import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import s from './Skills.module.css'
import Skill from "./Skill";
import BlockTitle from "./BlockTitle";

import reactIcon from './assets/img/react.svg'
import css from './assets/img/css.svg'
import js from './assets/img/jsLogo.svg'


const Skills = () => {
    return (
        <ScrollableAnchor id={'skills'}>
            <div className={s.skills}>
                <div className={s.container}>
                    <div className={s.headerTitle}>
                        <BlockTitle title={"MY SKILLS"}/>
                    </div>
                    <div className={s.skillsWrapper}>
                        <Skill icon={css} title={"Html/Css"}/>
                        <Skill icon={js} title={"JavaScript"}/>
                        <Skill icon={reactIcon} title={"React/Redux"}/>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Skills;

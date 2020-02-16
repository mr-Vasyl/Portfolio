import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.project} >
            <img alt="project" src={props.img} />
            <div className={s.projectImg}>
                <a className={s.btnShow} href={props.link}>show now</a>
            </div>
            <span className={s.projectTitle}>{props.title}</span>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;

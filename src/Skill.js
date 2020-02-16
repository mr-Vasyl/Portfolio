import React from 'react';
import s from './Skill.module.css'

function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.icon} alt="icon"/>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Skill;

import React from 'react';
import s from './BlockTitle.module.css'

function BlockTitle(props) {
    return <> <h2 className={s.title}>{props.title}</h2> </>
}

export default BlockTitle;

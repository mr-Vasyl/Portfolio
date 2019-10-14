import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill";
import reactIcon from './assets/img/react.svg'


function Skills() {

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.blockTitle}>Мої скіли</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.skillsWrapper}>
                    <Skill icon={reactIcon} title={"JavaScript"}
                           description={" dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametr sit amet"}/>
                    <Skill icon={reactIcon} title={"JavaScript"}
                           description={"Lorem ipsLorem ipsum dolLorem ipsum dolor sit ametLorem ipsum dolor sit ametor sit ametLorem ipsum dolor sit ametum dolor sit amet"}/>
                    <Skill icon={reactIcon} title={"JavaScript"} description={"Lorem ipsum dolor sit amet"}/>

                    {/*<div className={styles.skill}>*/}
                    {/*    <div className={styles.icon}>*/}
                    {/*        <img src="" alt="icon"/>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.skillTitle}>JavaScript</span>*/}
                    {/*    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elitf. Nobis, nostrum.</span>*/}
                    {/*</div>*/}
                    {/*<div className={styles.skill}>*/}
                    {/*    <div className={styles.icon}>*/}
                    {/*        <img src="" alt="icon"/>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.skillTitle}>JavaScript</span>*/}
                    {/*    <span className={styles.description}>JavaScript</span>*/}
                    {/*</div>*/}
                    {/*<div className={styles.skill}>*/}
                    {/*    <div className={styles.icon}>*/}
                    {/*        <img src="" alt="icon"/>*/}
                    {/*    </div>*/}
                    {/*    <span className={styles.skillTitle}>JavaScript</span>*/}
                    {/*    <span className={styles.description}>JavaScript</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Skills;

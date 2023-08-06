import React from 'react';
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import landingPic from'../../assets/LandingPic.png'

const Landing = () => {
    return (
        <div className={styles.landingScreen}>
            <h1 className={styles.title}>Wel...<span className={styles.subtitle}>goof! </span>come</h1>
            <img src={landingPic} alt="Cute Doggie" className={styles.landingIcon}/>
            <Link to= "/home">
                <button className= {styles.landingButton}>Get In!</button>
            </Link>
    </div>
    );
};

export default Landing;
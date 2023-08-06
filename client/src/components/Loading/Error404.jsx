import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from "../../assets/37d1de086008eb83d67df09e1f8b21fb.jpg"
import styles from "./Loading.module.css"
const Error404 = () => {
    return (
        <div>
            <img src={errorPic} alt="Ay, page not found!" />
            <h1>Sorry, page not found!</h1>
           <Link to="/home"><button className={styles.buttonError}>Go Home</button></Link>
        </div>
    );
};

export default Error404;
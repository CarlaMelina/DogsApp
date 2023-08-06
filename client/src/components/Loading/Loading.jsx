import React from 'react';
import styles  from "./Loading.module.css"
import firulay from "../../assets/dbe6b90d0fd0d209001cb64eefd038d7.gif"

const Loading = () => {
    return (
        <div>
               <div
         className={styles.loadingScreen}>
           <img
           className={styles.loadingScreenIcon} 
           src={firulay} alt="loading" />
           
        </div>
            
        </div>
    );
};

export default Loading;
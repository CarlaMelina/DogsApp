import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'
import NavPic from "../../assets/LogoPic6.png"
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
    
    return (
        <div className={styles.navBar}>
            <div> 
               <Link  to= "/home" ><img src={NavPic} className= {styles.picNav} alt="Dogs with glasses" /></Link> 
            </div>
            <div className={styles.searchBar}>
                <SearchBar/>
            </div>
            <div className= {styles.navLinkContainer}>
                
                <Link  to= "/create" className= {`${styles.navLink} ${styles.createLink}`}>Create your Dog</Link>
            </div>
            
        </div>
    );
};

export default NavBar;
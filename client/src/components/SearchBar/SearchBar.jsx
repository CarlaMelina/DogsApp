import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions';
import {useHistory} from"react-router-dom";
import styles from "./Search.module.css"
//import Error404 from "../Loading/Error404"


const SearchBar = () => {

const dispatch = useDispatch();
const [dog, setDog] = useState("");
const history = useHistory();
//const [error404, setError404] = useState(false);

const handlerInput = (event)=>{
    event.preventDefault()
    //console.log(dog)
    setDog(event.target.value)
    
}
const handlerSubmit = ()=>{
    if (!dog) {history.push('/home'); } 
        dispatch(getDogByName(dog))
         setDog('');
      }

    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder='Search dog...' value= {dog} className={styles.inputSearch}
            onChange= {handlerInput} />

            <button type='submit' onClick={handlerSubmit} className={styles.submit}>🔎</button>
           {/* <div>{error404 && <Error404 />}</div>  */}
        </div>
    );
};

export default SearchBar;
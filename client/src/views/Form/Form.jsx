import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom";
import { getTemps, postDog } from '../../redux/actions';
import NavPic from "../../assets/LogoPic6.png";
import validateForm from "./ValidateForm"
import styles from "./Form.module.css"
import axios from 'axios';

const Form = () => {
const dispatch = useDispatch();
const history = useHistory();

const temperaments= useSelector((state)=>state.temperaments);
const temperamentsOrder = temperaments.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0
})
    const [ form, setForm ] = useState({
        name:"",
        img: "",
        heightMin: "", 
        heightMax: "", 
        weightMin: "", 
        weightMax: "", 
        yearsMin: "", 
        yearsMax: "",
        temperaments: []
        
    });
    useEffect(()=>{
        dispatch(getTemps())
    }, [dispatch])
     const [errors, setErrors] = useState({ });
    const changeHandler = (event)=>{
            const value = event.target.value;
            setErrors(
                validateForm({...form, [event.target.name]: value})
              )
            setForm({...form, [event.target.name]: value})
    };
    // cuando se ejecuta este handler al estado form(...form), le voy a setear el valor(event.trget.value), del "evento" o sea imput, qu esté modificando( identificandolo por su event.target.name)

    const selectHandler = (event)=>{
        setForm({...form, temperaments: [ ...form.temperaments, event.target.value]  })
    };
    const deleteTempHandler = (e)=>{
        e.preventDefault();
        setForm({...form, temperaments:[ ] })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        dispatch(postDog(form));
        window.alert("Dog created successfully!");
        setForm({
            name:"",
            img: "",
            heightMin: "", 
            heightMax: "", 
            weightMin: "", 
            weightMax: "", 
            yearsMin: "", 
            yearsMax: "",
            temperaments: []
    });
    history.push("./home")
    };
   // console.log(form)

  //handler para agregar una imagen random, traida de la api
   const imgRandomHandler = async () => {
    const urlRandom = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imgRandom = urlRandom.data;
        setForm({...form, img: imgRandom.message });
     }; 
      
        
    return (
        
    <div >
        <div className={styles.picNav}> <Link  to= "/home" ><img src={NavPic}  alt="Dogs with glasses" />
        </Link>
         </div>
       
         
        
        <div className={styles.container}>
            <h1>Create your dog</h1>
        <form onSubmit={submitHandler}>
            
            <div>
                <label >Name: </label>
                <input type="text" value= {form.name} 
                onChange = {changeHandler} 
                name= "name"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}

                 />
             {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            
            <div>
                <label >Image: </label>
                <input type="text" 
                value= {form.img}
                onChange = {changeHandler} 
                name= "img"
                className={`${styles.input} ${errors.img ? styles.inputError : ''}`}
                />
                 {errors.img && <p className={styles.error}>{errors.img}</p>}
                  Or: {' '}
                <button type="button" onClick={imgRandomHandler} className={`${styles.button} ${styles.buttonRandom}`}>Add random image</button>
            </div>

            <div>
                <label >Height Min: </label>
                <input type="text"
                value= {form.heightMin} 
                onChange = {changeHandler}
                name= "heightMin" 
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}/> cm
                {errors.heightMin && <p className={styles.error}>{errors.heightMin}</p>}
            </div>

            <div>
                <label >Height Max: </label>
                <input type="text"
                value= {form.heightMax} 
                onChange = {changeHandler}
                name= "heightMax"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`} /> cm
                {errors.heightMax && <p className={styles.error}>{errors.heightMax}</p>}
            </div>
            {/* {console.log([form.heightMin, form.heightMax])} */}
            <div>
                <label >Weight Min: </label>
                <input type="text"
                value= {form.weightMin} 
                onChange = {changeHandler}
                name= "weightMin"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`} 
                 /> Kg
                {errors.weightMin && <p className={styles.error}>{errors.weightMin}</p>}
            </div>

            <div>
                <label >Weight Max: </label>
                <input type="text"
                value= {form.weightMax} 
                onChange = {changeHandler}
                name= "weightMax"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`} /> Kg
                 {errors.weightMax && <p className={styles.error}>{errors.weightMax}</p>}
            </div>
            {/* {console.log([form.weightMin, form.weightMax])} */}
            <div>
                <label >Years Min: </label>
                <input type="text"
                value= {form.yearsMin} 
                onChange = {changeHandler}
                name= "yearsMin"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}   />
                {errors.yearsMin && <p className={styles.error}>{errors.yearsMin}</p>}
            </div>

            <div>
                <label >Years Max: </label>
                <input type="text"
                value= {form.yearsMax} 
                onChange = {changeHandler}
                name= "yearsMax" 
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}  />
                {errors.yearsMax && <p className={styles.error}>{errors.yearsMax}</p>}
            </div>

            <div>
                <label >Temperaments: </label>
                <select onChange = {selectHandler} className={styles.select}>{temperamentsOrder.map((e, index)=>(
                    <option value= {e.name} key={index} >{e.name}</option>
                ))}</select>
                {errors.temperaments && <p className={styles.error}>{errors.temperaments}</p>}
                <div>{form.temperaments.map((e, index)=> (<div key={index}>{e}<button onClick={deleteTempHandler} className={`${styles.button} ${styles.buttonDelete}`}>x</button></div>))}</div>
                
                </div>
               {form.name? <button type="submit" className={`${styles.button} ${styles.buttonOk}`}>Submit</button>:
               <button disabled>Submit</button>
               }
            
        </form>
        </div>
        </div>
    );
};

export default Form;
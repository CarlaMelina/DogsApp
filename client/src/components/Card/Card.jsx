import styles from "./Card.module.css"
import { Link } from "react-router-dom"
const Card = (props) => {
    
    // const temperament= props.temperaments.split(", ").map((temperament) => temperament.trim());
 
   //console.log(props.temperaments)
   const temperaments = props.temperaments.split(", ").map((temperament) => temperament.trim());
   //console.log(temperaments)
    return (     
       
        <div className={`${styles.container} ${styles.clearfix}`}>
            <div className={styles.card}> 
                <Link to={`/detail/${props.id}`}>
                <img src={props.img} alt="dog" className= {styles.pic}/>
                </Link>
                <h2 className={styles.name}> {props.name}</h2>
                <h4 className={styles.title}>Weight:  {" "}
                     {props.weightMin} - {props.weightMax} kg
                </h4>
                <h4 className={styles.title}>
                Temperaments:{" "}</h4>
                <h5>
        {temperaments.map((temperament, index) => (
        <div key={index} className={styles.list}>
        {temperament}
     </div>
     ))}
      </h5>

            </div> 
        </div>
    );
};     
          
  
export default Card;
         
                   
                
           
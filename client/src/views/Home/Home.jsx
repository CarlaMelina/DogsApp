
//import Cards from '../../components/Cards/Cards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getDogs, getTemps } from "../../redux/actions";
import NavBar from '../../components/NavBar/NavBar';
import Paginado from "../../components/Paginado/Paginado"
import styles from "./Home.module.css"
import Filters from '../../components/Filters/Filters';
import Order from '../../components/Filters/Order';
import Card from '../../components/Card/Card';
import Loading from "../../components/Loading/Loading"

//import Filters from '../../components/Filters/Filters';

const Home = () => {

    const dispatch = useDispatch( );
   // const allDoggies = useSelector(state=>state.dogs) //basicaemnte con useS le digo traeme todo lo que está en el estado dogs, un mapeo
    //=que hacer map.state.toprops
const dogs= useSelector(state=>state.dogs);
    //console.log(dogs);
const temps = useSelector(state=>state.temperaments);
   // console.log(temps)


    useEffect(()=>{
        dispatch(getDogs())
    }, [dispatch]) //similar map dispatchtoprops---- NO OLVIDAR array de depend para no hacer  llamados ilimitados
    useEffect(()=>{
        dispatch(getTemps())
    }, [dispatch])

    
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        if (dogs.length > 0) {
          setLoading(false);
        }
      }, [dogs]);

    // <------------*PAGINADO*---------------------------------------->
    const [currentPage, setCurrentPage] = useState(1);//pagina actual
    const [dogsPage, setDogPage] =useState(8) ; //perros por pagina
    const indexLastDog= currentPage * dogsPage;//"indice" ultimo perro
    const indexFirstDog = indexLastDog - dogsPage; //indice primer perro
    const currentDogs =  dogs.slice(indexFirstDog, indexLastDog); //perros que se van a renderizar, corta el array con esos indices segun primer y ultimo perro;
    const dogPage= (number)=>{setCurrentPage(number)}; //cambia la pagina , seteando la pagina actual por la nueva;
    //console.log(currentDogs)

 // <------------*PAGINADO*---------------------------------------->

    return (
        <div className= {styles.screen}>
            <NavBar/>
        
             <div className={styles.filtros}>
                <div className={styles.filter}><h3>Filter: </h3><Filters setCurrentPage= {setCurrentPage} temps= {temps} />
                </div>
                 <div className={styles.order}><h3>Order: </h3><Order setCurrentPage= {setCurrentPage} setOrder= {setOrder}/>
                </div>
            </div>

            <div>
               <dir className={styles.paginado}><Paginado dogsPage = {dogsPage} dogs={dogs.length}
            dogPage={dogPage} currentPage={currentPage} />
            </dir> 
            <h2 className={styles.subtitle}>DogApp🐾</h2>
            </div>

             { loading ?  <Loading /> :
             <div className= {styles.container}>
             {currentDogs?.map((e, index)=>{
                  return<Card
                    key = {index}
                    id={e.id}
                    img= {e.img}
                    name= {e.name}
                    temperaments={e.temperaments ? e.temperaments : ''}
                    //debido al error al mapear lo temperaments si algun elemento tiene ''
                    weightMin= {e.weightMin}
                    weightMax= {e.weightMax}
                    order={order}
             />  })}
             </div>}
    
           </div>
        
    );
};

export default Home;
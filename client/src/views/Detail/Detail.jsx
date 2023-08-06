import { useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { dogDetailId, cleanDetail, deleteDog } from "../../redux/actions";
import Loading from "../../components/Loading/Loading"
import styles from '../Detail/Detail.module.css';



const Detail = ( ) => {

 //console.log(props)
    const { idRaza } = useParams();
    const dispatch = useDispatch();
   const history = useHistory();

     const detail = useSelector((state)=>state.dogDetail);  
     const [loading, setLoading] = useState(true);
     useEffect(() => {
		setLoading(true); 
		dispatch(dogDetailId(idRaza))
		  .then(() => setLoading(false)) 
		  .catch(() => setLoading(false)); 
	  }, [dispatch, idRaza]);

	  const handleRemove = async () => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteDog(idRaza))
            setTimeout(() => {
                history.push("/home")
            }, 2000)
        }
	}
	
	const temperaments = detail.temperaments
  ? detail.temperaments.split(", ").map((temperament) => temperament.trim())
  : [];
    return (
        <div className={styles.detail}>
   { loading ?  <Loading /> :
      <div className={styles.container}>
        <div>
          <Link to='/home'>
            <button onClick={() => dispatch(cleanDetail())} className={styles.bottonClose}>Go Home</button>
          </Link>
        </div>
		{detail.createdInDb ? (
          <div>
            
            <button onClick={handleRemove} className={styles.buttonDelete}>Delete Dog</button>
          </div>
        ) : null}
        <div className={styles.cardDetail}>
					<div className={styles.cardImage}>
						<img src={detail.img} alt={detail.name} />
					</div>
					<div className={styles.cardBody}>
					
						<div className={styles.cardInfo}>
							<h1>{detail.name}</h1>
							

							<div className={styles.cardDetail}>
								<div className={styles.cardData}>
									<div>
										<h3>Weight</h3> {detail.weightMin} - {detail.weightMax} Kg
									</div>
									<div>
										<h3>Height</h3> {detail.heightMin} - {detail.heightMax} Cm
									</div>
									<div>
										<h3>Life Span</h3> {detail.yearsMin} - {detail.yearsMax} years
									</div>
								</div>
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
					
					</div>
				</div>
       
      </div>}
    
  </div>
);
            
            
       
    
}

export default Detail;



        
    
    
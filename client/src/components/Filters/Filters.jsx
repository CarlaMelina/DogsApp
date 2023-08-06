//import { useEffect, useState } from 'react';
import { filterTemp, filterSource} from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Filters = ({setCurrentPage, temps}) => {
// const doggies = useSelector(state=>state.dogs)
// console.log(doggies)
const dispatch= useDispatch();




//console.log(temps)

const OrderTemps = temps.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
})
//console.log(tempsOrder)
    const handlerFilterTemp = (event)=>{ 
        dispatch(filterTemp(event.target.value))
        setCurrentPage(1);
        
       };

    const handlerFilterSource= (event)=>{ dispatch(filterSource(event.target.value))
        setCurrentPage(1)
        
        };

    return (
        <div>
            <select onChange= {handlerFilterTemp}>
                <option value="All">All</option>

                {OrderTemps?.map((e, index) => {
                    return(
                        <option  key={index} value={e.name} > {e.name}</option>
                    )
                })}
                
            </select>


            <select onChange={handlerFilterSource}>
            
                <option value="All">All</option>
                <option value="CreatedInDb">Own Dog</option>
                <option value="Api">Breed Dog</option>
            </select>
            
        </div>
    );
};

export default Filters;
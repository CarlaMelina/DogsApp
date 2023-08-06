
import { useDispatch } from 'react-redux';

import { orderAscDesc, orderWeight} from '../../redux/actions';



const Order = ({setCurrentPage, setOrder}) => {
   
 const dispatch = useDispatch();

const handlerOrderName= (event)=>{
    dispatch(orderAscDesc(event.target.value))
    setCurrentPage(1)
    setOrder(`${event.target.value}`)
};       

const handlerOrderWeight= (event)=>{
    dispatch(orderWeight(event.target.value))
    setCurrentPage(1)
    setOrder(`${event.target.value}`)
};



    return (
        <div>
            <select onChange= {handlerOrderName} >
            <option value="All">All</option>
                <option value="Asc">A-Z</option>
                <option value="Desc">Z-A</option>
            </select>
            <select  onChange= {handlerOrderWeight} >
            <option value="All">All</option>
                <option value="Min">Min</option>
                <option value="Max">Max</option>
            </select>

        </div>
    );
};

export default Order;
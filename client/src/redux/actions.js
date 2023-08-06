import axios from "axios";



export const GET_DOGS = "GET_DOGS";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const GET_TEMPS = "GET_TEMPS";
export const ORDER_ASC_DESC ="ORDER_ASC_DESC";
export const ORDER_WEIGHT ="ORDER_WEIGHT";
export const GET_DOG = "GET_DOG";
export const POST_DOG = "POST_DOG";
export const DOG_DETAIL= "DOG_DETAIL";
export const CLEAN_DETAIL="CLEAN_DETAIL";
export const DOG_DELETE = "DOG_DELETE"

export const getDogs = ( )=>{
    return async  function(dispatch){

        const theDogs= await axios.get("http://localhost:3001/dogs");
        const dogs = theDogs.data;
        //console.log(dogs);
        return dispatch({ type: GET_DOGS, payload: dogs})
    }
};
export const getTemps = ( )=>{
    return async function(dispatch){
        try {
              const temps = await axios.get("http://localhost:3001/temperaments");
        const temperaments = temps.data;
       // console.log(temperaments);
       return dispatch({type: GET_TEMPS, payload: temperaments})
        } catch (error) {
            console.log(error)
        }}
      
       
        
   

};
export const filterTemp = (payload)=>{
return ({type: FILTER_BY_TEMPERAMENTS, payload})
};

export const filterSource = (payload)=>{
    return({type: FILTER_BY_SOURCE, payload})
};
export const orderAscDesc = (payload)=>{
    return({type: ORDER_ASC_DESC, payload})
};

export const orderWeight= (payload)=>{
    return({type: ORDER_WEIGHT, payload})
};

export const getDogByName = (name)=>{
    return async (dispatch)=>{
        try {
            const dogName= await axios.get("http://localhost:3001/dogs?name="+ name);
            return dispatch({type: GET_DOG, payload: dogName.data})
        } catch (error) {
            console.log(error)
        };
    }
}
export const postDog = (payload) => {
    
    return async ()=>{
        try{
            const newDog = await axios.post('http://localhost:3001/dogs', payload)
            return newDog;
        } catch(error){
           window.alert()
            console.log(error)
        }  
    }
};

export const dogDetailId =  (idRaza)=>{
    return async function(dispatch){
        try {
            const dog= await axios.get(`http://localhost:3001/dogs/${idRaza}`);
            const dogData= dog.data;
            return dispatch({
                type: DOG_DETAIL,
                payload: dogData
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
};
export const deleteDog= (id) => {
	return async (dispatch) => {
        try {
            //console.log(id)
			await axios.delete("http://localhost:3001/dogs/"+id)
			 
            return dispatch({
                type: DOG_DELETE,
                payload: id})
            } catch (error) {
                console.log(error)
            }
		
	}
}

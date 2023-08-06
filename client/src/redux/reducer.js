import { GET_DOGS, FILTER_BY_TEMPERAMENTS, FILTER_BY_SOURCE, GET_TEMPS , ORDER_ASC_DESC, ORDER_WEIGHT, GET_DOG, POST_DOG, DOG_DETAIL, CLEAN_DETAIL, DOG_DELETE} from "./actions";

const inicialState = {
dogs: [ ],
allDogs: [ ],
temperaments: [ ],
dogDetail: { }
}

const rootReducer = (state= inicialState, action )=>{
switch (action.type) {
    case GET_DOGS:
        return {
            ...state,
            dogs: action.payload,
            allDogs: action.payload
        }
    
     case GET_TEMPS:
            return{
                ...state,
                temperaments: action.payload
            }


     case FILTER_BY_TEMPERAMENTS:
            const allDogs= state.allDogs;
            //console.log(allDogs)
            const filter = action.payload === "All"?  allDogs : allDogs.filter(e=>e.temperaments?.includes(action.payload));
            return{
                ...state,
                dogs: filter
            }
            
    case FILTER_BY_SOURCE:
                const allDoggies= state.allDogs;
                const sourceFilter = action.payload === "CreatedInDb"? allDoggies.filter(e=>e.createdInDb) : allDoggies.filter(e=>!e.createdInDb)
                return{
                    ...state,
                    dogs: action.payload === "All"? allDoggies : sourceFilter
                }
                case ORDER_ASC_DESC:
                    const orderByName = action.payload === 'Asc' ?            
                    state.allDogs.sort((a, b) => {
                        if(a.name > b.name) return 1;
                        if(a.name < b.name) return -1;
                        return 0
                    }) :
                    state.allDogs.sort((a, b) => {
                        if(a.name > b.name) return -1;
                        if(a.name < b.name) return 1;
                        return 0
                    });
                    return{
                        ...state,
                        dogs: orderByName
                    }
                
                case ORDER_WEIGHT:
                    const weightDogs = state.allDogs
                    const sortWeight = action.payload === "Min"
                        ? weightDogs.sort((a, b) => a.weightMin - b.weightMin)
                        : weightDogs.sort((a, b) => b.weightMin - a.weightMin);
                    return {
                        ...state,
                        dogs: sortWeight
                    };
                case GET_DOG:
                    return{
                        ...state,
                        dogs: action.payload,
                    }
                    case POST_DOG:
                        return{
                            ...state
                        };

                        case DOG_DETAIL:
                        return{
                                ...state,
                                dogDetail: action.payload
                        };
                        case CLEAN_DETAIL:
                            return {
                                ...state,
                                
                            };
                            case DOG_DELETE:

                                     const idRazaEliminado = action.payload;
                                     //console.log(idRazaEliminado)
                                     const updatedAllDogs = state.allDogs.filter(dog => dog.idRaza !== idRazaEliminado);
                                     const updatedDogs = state.dogs.filter(dog => dog.idRaza !== idRazaEliminado);
                                     return {
                                         ...state,
                                         allDogs: updatedAllDogs,
                                         dogs: updatedDogs,
                                     };
                                    


            

    default: return  { ...state }
}
}




export default rootReducer;
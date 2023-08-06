//controllers GET y POST de "dog", mi modelo, el resto hacerlo en handlers!!
const axios = require("axios")
const { Dog, Temperaments } = require ("../db");
const  {cleanArray, cleanBDD }= require("../utils");
const { API_KEY } = process.env;

 const getDogs =async ()=> {
    const dogsBdd = await Dog.findAll( {
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]    
    });
   // console.log(dogsBdd)
   const dogsBddMap= cleanBDD(dogsBdd);
   //console.log(dogsBddMap);
    const dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const dogsApiMap = cleanArray(dogsApi);
    const dogsArray= [ ...dogsBddMap, ...dogsApiMap ];
    return dogsArray.sort((a,b)=>{
        if(a.name>b.name)return 1;
        if(a.name<b.name)return -1;
        return 0;
    })
   }


const  getDog =async ( name )=> {
const allDogs = await getDogs();
const nameDog = allDogs.filter(n=>n.name.toLowerCase().includes(name.toLowerCase()));

return nameDog;

}

const getDogByBreed= async(idRaza)=>{
    console.log(idRaza)
    const idDogs = await getDogs();
    
    const dog = idDogs.find((d) => d.id === idRaza.toString());
		return dog || false;
   
} 






const createDog = async (name, img, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax, temperaments)=>{
   
const dogModel=await Dog.create({
    name, img, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax});
 const temperamentAdd = await Temperaments.findAll({
     where: { name: temperaments }
  });

  await dogModel.addTemperaments(temperamentAdd);
  return dogModel;
  };
  

  const deleteDog = async (id) => {
	
		const deleteDb = await Dog.destroy({
			where: {
				id,
			},
			force: true,
		})
		return deleteDb;
	
};













module.exports={
   createDog,
    getDogByBreed,
    getDogs, 
    getDog,
    deleteDog
}
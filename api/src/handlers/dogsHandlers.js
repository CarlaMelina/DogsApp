
const { createDog, getDogByBreed, getDogs, getDog, deleteDog } = require("../controllers/dog")

const getDogsHandler = async  (req, res) => {
    //Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
    const { name }= req.query
    const results = name ? await getDog(name) : await getDogs()
    
    
    res.status(200).json(results)
    };
 
  



const getDogHandler = async (req, res) => {
    
       try {
         const {idRaza} = req.params; 
        console.log("ID:" + idRaza)
         const dog =await getDogByBreed(idRaza);
         console.log("PERRO:"+dog)
        if(dog){res.status(200).json(dog)} 
       } catch (error) {
         res.status(400).json({error: error.message})
       }
    
    
    };
 const createDogHandler = async   (req, res) => {
    const {name, img, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax, temperaments} = req.body;
    
   try {
      if(!name || !img || !heightMin || !weightMin || !yearsMin || !yearsMax ||!heightMax || !weightMax ) throw Error("Missing data");
      
   const newDog = await  createDog(name, img, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax, temperaments );

  
  
  res.status(200).json({newDog});
   } catch (error) {
      res.status(400).json({error: error.message});
   }
        };

   const deleteDogHandler= async (req, res) => {
         try {
            const { id } = req.params;
              await deleteDog(id)
              res.sendStatus(200)
         } catch (error) {
            res.status(400).send(error.message)
         }
      };    

   module.exports = {
    getDogsHandler,
    getDogHandler,
    createDogHandler,
    deleteDogHandler
   }
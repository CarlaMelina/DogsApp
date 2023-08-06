//rutas GET y POST de "dog"
const { Router } = require('express');
const {
    getDogsHandler,
    getDogHandler,
    createDogHandler,
    deleteDogHandler
   } = require ('../handlers/dogsHandlers');
const dogsRouter = Router();

const validate = (req,res, next)=>{
    const {name, img, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax} = req.body;
    if (!name || !img || !heightMin || !weightMin || !yearsMin || !yearsMax ||!heightMax || !weightMax )
    res.status(200).json({error: "Missing Data"})
    next ( );
}
dogsRouter.get('/', getDogsHandler );
dogsRouter.get('/:idRaza', getDogHandler );
dogsRouter.post('/', validate, createDogHandler );
dogsRouter.delete("/:id", deleteDogHandler)

module.exports = dogsRouter;


//controllers GET y POST de "temperaments"
const  { Temperaments } = require("../db")
const { API_KEY } = process.env;
const axios = require("axios");
//const { getDogs } = require("./dog");

const getTemperaments = async ()=>{
    const dogsApi =  (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const tempApi = dogsApi.map(t=>t.temperament)
    const temperaments = tempApi.join(',').split(',');    
    const trimTemperaments = temperaments.map((t) => t.trim());
    //me saltaba error por loq ue algunos temperamentos los traia con espacioa delante, lo soluciono con un trim
    const allTemperaments = trimTemperaments.filter(e => e !== ' ' && e !== 'undefined' && e !== ''); 
    //saco alguno temperments que venian vacios y me afectaba en el filter
    const temperApi = new Set(allTemperaments);
    
    temperApi.forEach(t => {
        Temperaments.findOrCreate({
            where: {name: t}
        })
    })
    
    const dbTemperaments = await Temperaments.findAll();
    return dbTemperaments;
}

module.exports= getTemperaments
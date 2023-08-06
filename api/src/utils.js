

const cleanArray= (arr)=> 

     arr.map( (e)=>{
            return { 
            id: e.id.toString(),
            name: e.name,
            img: e.image.url,
            heightMin: parseInt(e.height.metric.split("-")[0]), //el array de metric tengo que partirlo en dos (en dos indices), uso el guion.. desp me quedo con el que esta en el primer indice, o sea cero
            heightMax: parseInt(e.height.metric.split("-")[1]),//para que no me falle y valide tome solo el numero encontre parseInt, funciona, en lifespan no toma years
            weightMin: e.id==179 || e.id == 232 ?  20 : parseInt(e.weight.metric.split("-")[0]),
            weightMax: e.id==179 ?  35 : parseInt(e.weight.metric.split("-")[1]),
            yearsMin: parseInt(e.life_span.split("-")[0]),
            yearsMax: parseInt(e.life_span.split("-")[1]),
            createdInDb: false,
            temperaments: e.id==211 ? "Energetic" : e.temperament
        }
    });
     

    const cleanBDD= (arr)=>
   { return arr.map((d) => ({
        id: d.id,
        name: d.name,
        img: d.img,
        heightMin: d.heightMin,
        heightMax: d.heightMax,
        weightMin: d.weightMin,
        weightMax: d.weightMax,
        yearsMin: d.yearsMin,
        yearsMax: d.yearsMax,
        createdInDb: true,
        temperaments: d.temperaments.map((t) => t.name ).join(', ')
      }));
    
}
    
  
//fetch('https://api.thedogapi.com/v1/breeds')
// .then(response => response.json())
// .then(data => {
//   const clean = data.map(e => {
//     return {
//       id: e.id,
//       image: e.image.url,
//       name: e.name,
//       height: e.height.metric,
//       weight: e.weight.metric,
//       years: e.life_span
//     };
//   });
// })
// .catch(error => {
//   console.log('Error al obtener los datos:', error);
// });

module.exports =  {cleanArray, cleanBDD}

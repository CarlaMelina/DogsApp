



const validateForm= (f)=>{
const formError= {};

const regexLetters = /^[a-zA-Z ]+$/;
const regexNumbers = /^[0-9]+$/; 



//Name
    if(!f.name) formError.name = 'Name is required';
    else if(!(regexLetters).test(f.name)) formError.name = 'Cannot contain symbols or numbers';

//img
    if (!f.img) {
          formError.img = 'Image URL is required';
      } else if (f.img.length > 255) {
        formError.img = 'URL exceeds the maximum length of 255 characters';
      };
     
// Height Min
if (!f.heightMin) formError.heightMin = 'Height Min is required';
else if (!regexNumbers.test(f.heightMin))
  formError.heightMin = 'Height Min must be a number';
else if (f.heightMin <= 5)
  formError.heightMin = 'Height Min must be greater than 5';

// Height Max
if (!f.heightMax) formError.heightMax = 'Height Max is required';
else if (!regexNumbers.test(f.heightMax))
  formError.heightMax = 'Height Max must be a number';
else if (f.heightMax > 100)
  formError.heightMax = 'Height Max must be less than 100';

// Weight Min
if (!f.weightMin) formError.weightMin = 'Weight Min is required';
else if (!regexNumbers.test(f.weightMin))
  formError.weightMin = 'Weight Min must be a number';
else if (f.weightMin <= 1)
  formError.weightMin = 'Weight Min must be greater than 1';

// Weight Max
if (!f.weightMax) formError.weightMax = 'Weight Max is required';
else if (!regexNumbers.test(f.weightMax))
  formError.weightMax = 'Weight Max must be a number';
else if (f.weightMax > 100)
  formError.weightMax = 'Weight Max must be less than 100';

// Years Min
if (!f.yearsMin) formError.yearsMin = 'Years Min is required';
else if (!regexNumbers.test(f.yearsMin))
  formError.yearsMin = 'Years Min must be a number';
else if (f.yearsMin <= 5)
  formError.yearsMin = 'Years Min must be greater than 5';

// Years Max
if (!f.yearsMax) formError.yearsMax = 'Years Max is required';
else if (!regexNumbers.test(f.yearsMax))
  formError.yearsMax = 'Years Max must be a number';
else if (f.yearsMax <= f.yearsMin)
  formError.yearsMax = 'Years Max must be greater than Years Min';

// Temperaments
if (!f.temperaments)
  formError.temperaments = 'Select at least one temperament';



return formError;
};

export default validateForm;
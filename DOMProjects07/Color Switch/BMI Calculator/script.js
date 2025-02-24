let form = document.querySelector('form')

form.addEventListener('submit', (a) => {
    a.preventDefault()

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height) ) {
       result.innerHTML =`Please Give A Valid Height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight) ) {
       result.innerHTML =`Please Give A Valid weight ${weight}`
    }else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Show the Results
        // result.innerHTML = `<span> ${bmi} </span>`

        
        let category = "";
        switch (true) {
            case (bmi < 18.6):
                category = "underweight";
                break;
        
            case (bmi >= 18.6  && bmi <= 24.9):
                category = "Normal Range";
                break;
        
            case (bmi > 24.9):
                category = "overweight";
                break;
        
            default:
                category = 'Invalid bmi.'
                break;
        }

        result.innerHTML = `<span>Your BMI: ${bmi} </span> <br> <span> Category: ${category}  </span>`
    }
})







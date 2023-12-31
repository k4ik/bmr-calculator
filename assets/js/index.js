function calculateBMR() {
    let gendersSelect = document.querySelector(".gendersSelect").value;
    let weight = parseFloat(document.querySelector("#weight").value);
    let height = parseFloat(document.querySelector("#height").value);
    let age = parseFloat(document.querySelector("#age").value);
    let levelSelect = document.querySelector(".levelSelect").value;

    
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please, enter valid values.");
    } else {
        let tmb;
        let levelOfPhysicalActivity;
        
        if (levelSelect == "sedentary") {
            levelOfPhysicalActivity = 1.2;
        } else if (levelSelect == "lightlyActive") {
            levelOfPhysicalActivity = 1.375;
        } else if (levelSelect == "moderatelyActive") {
            levelOfPhysicalActivity = 1.55;
        } else if (levelSelect == "veryActive") {
            levelOfPhysicalActivity = 1.725;
        } else {
            levelOfPhysicalActivity = 1.9;
        }
        
        let result = document.querySelector("#result");

        if (gendersSelect == "men") {
            tmb = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * levelOfPhysicalActivity;
            result.innerHTML = `${tmb} Cal/Day`;
        } else {
            tmb = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * levelOfPhysicalActivity;
            result.innerHTML = `${tmb} Cal/Day`;
        }
    }
}

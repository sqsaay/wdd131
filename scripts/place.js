//Get year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last update date
document.getElementById("lastModified").innerHTML = document.lastModified;

//Compute Windchill 
const temperature = 20;
const wind = 18;
let result = 0;


function calculateWindChill(temp, wind){
    if (temp <= 10){
    result = 35.74 + 0.6215 * temp - 35.75 * (wind * 0.16) + 0.4275 * temp * wind * 0.16;
    return result;
    }
    else{
        result = 'N/A';
        return result;
    }
}

document.getElementById('windChill').textContent = calculateWindChill(temperature, wind);

const locationSearch = document.querySelector("#location");
const searchBtn = document.querySelector(".searchBtn");
const place = document.querySelector('#place');
const description = document.querySelector('#description');
const weather = document.querySelector('#weather');
const temp = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const windSpeed= document.querySelector('#windSpeed');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const main = document.querySelector('.main');



async function dataTest(location) {
    const key = "key=K7HY8UKY52DHP4WDZCFUGSAC9";
    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const response = await fetch((baseURL + location + '?unitGroup=metric&' + key) , {
        mode : 'cors'
    });
    const jsonObj = await response.json();
    console.log(jsonObj)
    return jsonObj;
}



searchBtn.addEventListener('click' ,async () => {

    
    let locate = locationSearch.value;
    let weatherObj = await dataTest(locate);
    main.style.border = '1px solid black';
    place.innerHTML ='City : ' + weatherObj.resolvedAddress;
    temp.innerHTML = 'Temprature : '+ weatherObj.currentConditions.temp + '&deg C';
    description.innerHTML = weatherObj.description;
    weather.innerHTML = 'Weather : ' + weatherObj.currentConditions.conditions;
    humidity.innerHTML = 'Humidity : ' + weatherObj.currentConditions.humidity + '%';
    windSpeed.innerHTML = 'Wind Speed : ' + weatherObj.currentConditions.windspeed + 'kmph';
    sunrise.innerHTML ='Sunrise : ' + weatherObj.currentConditions.sunrise;
    sunset.innerHTML ='Sunset : ' + weatherObj.currentConditions.sunset;
})


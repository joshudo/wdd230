const currentTemp = document.querySelector('#temp-c');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const speed = document.querySelector('#w-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=15.400&lon=-87.800&units=imperial&appid=152d51bb3a0416888e3a70910f0244d7';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
  
apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`;
    }

    const desc1 = arr.join(" ");
    speed.textContent = weatherData.wind.speed;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc1);
    captionDesc.textContent = desc1;

    var fTempNum = parseFloat(document.getElementById('temp-c').textContent);

    var Wspeed = parseFloat(document.getElementById('w-speed').textContent);

    var result = (35.74 + 0.6215*fTempNum - 35.75*(Wspeed**0.16) + 0.4275*fTempNum*(Wspeed**0.16)).toFixed(0);
    var result = result + '°F'

    if(fTempNum <= 50 && Wspeed > 3.0) {
        document.getElementById('windchill-value').textContent = result;
    } else {
        document.getElementById('windchill-value').textContent = 'N/A';
    }
}




const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#caption');
const humidity = document.querySelector('#humidity');
const temp01 = document.querySelector('#temp01');
const temp02 = document.querySelector('#temp02');
const temp03 = document.querySelector('#temp03');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158&lon=-117.351&exclude=current,minutely,hourly,alerts&units=imperial&appid=152d51bb3a0416888e3a70910f0244d7';

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
    currentTemp.innerHTML = `Tempature: <strong>${weatherData.list[4].main.temp.toFixed(0)}&deg; F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[4].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    const arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`;
    }

    const desc1 = arr.join(" ");
    humidity.textContent = `Humidity: ${weatherData.list[4].main.humidity}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc1);
    captionDesc.textContent = `Description: ${desc1}`;

    var firstday = weatherData.list[6].dt;
    var a = new Date(firstday*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[a.getDay()];
    temp01.innerHTML = `${dayOfWeek} <strong>${weatherData.list[8].main.temp}&deg; F</strong>`

    var firstday = weatherData.list[12].dt;
    var a = new Date(firstday*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[a.getDay()];
    temp02.innerHTML = `${dayOfWeek} <strong>${weatherData.list[16].main.temp}&deg; F</strong>`

    var firstday = weatherData.list[18].dt;
    var a = new Date(firstday*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[a.getDay()];
    temp03.innerHTML = `${dayOfWeek} <strong>${weatherData.list[24].main.temp}&deg; F</strong>`

}


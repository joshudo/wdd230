var fTempNum = parseFloat(document.getElementById('temp-c').textContent);

var speed = parseFloat(document.getElementById('w-speed').textContent);

var result = (35.74 + 0.6215*fTempNum - 35.75*(speed**0.16) + 0.4275*fTempNum*(speed**0.16)).toFixed(0);
var result = result + '°F'

if(fTempNum <= 50 && speed > 3.0) {
    document.getElementById('windchill-value').textContent = result;
} else {
    document.getElementById('windchill-value').textContent = 'N/A';
}
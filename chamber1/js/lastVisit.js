/*---------------- Start of the days per visit code ----------------*/

const timeBtwVisits = document.querySelector(".creepy-date");

var visitTime = new Date();

let lastVisit = new Date(localStorage.getItem("visit-time"));

if ( lastVisit.getTime() == 0) {
  lastVisit = new Date();
}

var msDifference = visitTime.getTime() - lastVisit.getTime();
var daysSince = Math.round(msDifference/(1000*60*60*24));

if (daysSince < 1){
  timeBtwVisits.textContent = "Welcome to the discovery page!";
} else {    
  timeBtwVisits.textContent = "It's been " + daysSince + " days since your last visit!";
} 

localStorage.setItem("visit-time", visitTime);

/*---------------- End of the days per visit code ----------------*/ 
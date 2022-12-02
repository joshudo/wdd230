/*---------------- Start of the days per visit code ----------------*/

const timeBtwVisits = document.querySelector(".creepyDate");

var visitTime = new Date();

let lastVisit = new Date(localStorage.getItem("visitTime"));

if ( lastVisit.getTime() == 0) {
  lastVisit = new Date();
}

var msDifference = visitTime.getTime() - lastVisit.getTime();
var daysSince = Math.round(msDifference/(1000*60*60*24));

if (daysSince < 1){
  timeBtwVisits.textContent = "It's your first visit here!";
} else {    
  timeBtwVisits.textContent = "It's been " + daysSince + " days since your last visit!";
} 

localStorage.setItem("visitTime", visitTime);

/*---------------- End of the days per visit code ----------------*/ 
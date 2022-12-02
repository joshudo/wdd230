/*-------------------------- Start of the nav bar code --------------------------*/

function toggleMenu() {
  document.getElementById("navList").classList.toggle("open");
  document.getElementById("burgerBtn").classList.toggle("open");
}

const bwr = document.getElementById("burgerBtn");

bwr.onclick = toggleMenu;

/*-------------------------- End of the nav bar code --------------------------*/

/*-------------------------- Start of the last modified code --------------------------*/ 

const datefieldUK = document.querySelector("#date");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const justYear = document.querySelector("#theYear");
justYear.textContent = now.getFullYear();

let oLastModif = new Date(document.lastModified);

document.getElementById("lastModified").textContent =
  oLastModif.toLocaleString("en-US", options);

/*-------------------------- End of the last modified code --------------------------*/ 

/*-------------------------- Start of the Mon & Tue Banner code --------------------------*/

let dayNow = now.getDay();

if (dayNow == "1" || dayNow == "2") {
  document.getElementById("banner").style.display = "block";
} else {
  document.getElementById("banner").style.display = "none";
}

/*---------------- End of the Mon & Tue Banner code ----------------*/




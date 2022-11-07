/*-------------------------- Start of the nav bar code --------------------------*/

function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("open");
  document.getElementById("burger-btn").classList.toggle("open");
}

const bwr = document.getElementById("burger-btn");

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

document.getElementById("last-modified").textContent =
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

/*---------------- Start of the lazy loading code ----------------*/


let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


/*---------------- End of the lazy loading code ----------------*/

/*---------------- Start of the days per visit code ----------------*/
const timeBtwVisits = document.querySelector(".creepy-date");

var visitTime = new Date();
/*console.log(visitTime)*/

let lastVisit = new Date(localStorage.getItem("visit-time"));

if ( lastVisit.getTime() == 0) {
  lastVisit = new Date();
}

/*console.log(lastVisit.getTime())*/

var msDifference = visitTime.getTime() - lastVisit.getTime();
var daysSince = Math.round(msDifference/(1000*60*60*24));

if (daysSince < 1){
  timeBtwVisits.textContent = "Welcome to the discovery page!";
} else {    
  timeBtwVisits.textContent = "It's been " + daysSince + " days since your last visit!";
} 
/*console.log(daysSince)*/

localStorage.setItem("visit-time", visitTime);

/*---------------- End of the days per visit code ----------------*/ 
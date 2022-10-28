function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("open");
  document.getElementById("burger-btn").classList.toggle("open");
}

const bwr = document.getElementById("burger-btn");

bwr.onclick = toggleMenu;

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

let oLastModif = new Date(document.lastModified);

document.getElementById("last-modified").textContent =
  oLastModif.toLocaleString("en-US", options);

let dayNow = now.getDay();

if (dayNow == "1" || dayNow == "2") {
  document.getElementById("banner").style.display = "block";
} else {
  document.getElementById("banner").style.display = "none";
}

const imgBeingLazy = document.querySelectorAll(".discovery-img")

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  },
  {
    threshold: 1,
  }
)

imgBeingLazy.forEach(img => {
  observer.observe(img)
})

const timeBtwVisits = document.querySelector(".creepy-date");

var visitTime = new Date();

let lastVisit = new Date(localStorage.getItem("visit-time"));

if (lastVisit.getTime() !== 0) {
  var msDifference = visitTime.getTime() - lastVisit.getTime();
  var daysSince = Math.round(msDifference/(1000*60*60*24));
  
  timeBtwVisits.textContent = "It's been " + daysSince + " days since your last visit!";
} else {
  timeBtwVisits.textContent = "Welcome to the discovery page!";
}

localStorage.setItem("visit-time", visitTime);
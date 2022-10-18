function toggleMenu() {
  document.getElementById("navList").classList.toggle("open");
  document.getElementById("burgerBtn").classList.toggle("open");
}

const bwr = document.getElementById("burgerBtn");

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

const dayNow = now.getDay();

if (dayNow == "Monday" || dayNow == "Tuesday") {
  document.getElementById("#banner").style.display = "block";
} else {
  document.getElementById("#banner").style.display = "none";
}

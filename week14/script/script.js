/*---------------------------------------- Nav bar ----------------------------------------*/

function toggleMenu() {
  document.getElementById("navList").classList.toggle("open");
  document.getElementById("burgerBtn").classList.toggle("open");
}

const bwr = document.getElementById("burgerBtn");

bwr.onclick = toggleMenu;

/*---------------------------------------- Nav bar ----------------------------------------*/

/*---------------------------------------- lastModified ----------------------------------------*/

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

let lastModifiedElement = document.getElementById("lastModified");
let oLastModif = new Date(document.lastModified);
lastModifiedElement.textContent = oLastModif.toLocaleString("en-US", options);


/*---------------------------------------- lastModified ----------------------------------------*/
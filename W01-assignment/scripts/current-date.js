const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

const now = new Date();

const justTheYear = document.querySelector("#theYear");
justTheYear.textContent = now.getFullYear();

let oLastModif = new Date(document.lastModified);

document.getElementById("last-modified").textContent = oLastModif.toLocaleString("en-US", options);
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

let oLastModif = new Date(document.lastModified);

document.getElementById("last-modified").textContent = oLastModif.toLocaleString("en-US", options);
const requestData = "./json/data.json";
const cards = document.querySelector('#cards');

fetch(requestData)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

function displayCompanies(companies) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let url = document.createElement('a');
    let founder = document.createElement('p');

    h2.textContent = companies.name;

    logo.setAttribute('src', companies.img);
    logo.setAttribute('alt',`${companies.name} logo`);
    logo.setAttribute('loading', 'lazy');

    url.textContent = `Visit their Website`;
    url.setAttribute('href', companies.url);
    founder.textContent = `Founder: ${companies.founder}`;

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(url);
    card.appendChild(founder);

    document.querySelector('div#cards').appendChild(card);
}

function toggleView() {
    document.querySelector('#cards').classList.toggle('list');
    document.querySelector("#listGridBtn").classList.toggle('list');
}

const listgridBtn = document.querySelector('#listGridBtn');
listgridBtn.onclick = toggleView;

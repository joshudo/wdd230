const requestData = "./json/data.json";
const spotlights = document.querySelector('.spotlights');

fetch(requestData)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        for (let i = 0; i<2;i++) {
            settingAds(companies);
        };        
    });

function settingAds(companies) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let url = document.createElement('a');
    let message = document.createElement('p');

    
    business = randomProperty(companies);
    h2.textContent = business.name;
    logo.setAttribute('src', business.img);
    logo.setAttribute('alt',`${business.name} logo`);
    logo.setAttribute('loading', 'lazy');

    url.textContent = `Visit their Website`;
    url.setAttribute('href', business.url);
    message.textContent = `A proud ${business.membership} member!`;

    card.appendChild(logo);
    card.appendChild(h2);    
    card.appendChild(message);
    card.appendChild(url);

    document.querySelector('div.spotlights').appendChild(card);
    console.log(card);
    
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length*Math.random()<<0]];
};
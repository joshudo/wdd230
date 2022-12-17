const formElement = document.querySelector("#myForm");
const outputElement = document.querySelector("#output");
const fruitDataUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let fruitfile = {};

fetch(fruitDataUrl)
  .then((response) => response.json())
  .then((data) => {
    fruitfile = data;
    console.log(fruitfile);

    const selectElements = [
      document.querySelector("#fruit1"),
      document.querySelector("#fruit2"),
      document.querySelector("#fruit3"),
    ];
    selectElements.forEach((select) => {
      data.forEach((fruit) => {
        const option = document.createElement("option");
        option.value = fruit.name;
        option.innerHTML = fruit.name;
        select.appendChild(option);
      });
    });
  });

function handleFormSubmit(event) {
  // Prevent the form from being submitted and refreshing the page
  event.preventDefault();

  let selectedFruit = [];
  // Get the input values
  const firstName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  selectedFruit.push(fruit1);
  const fruit2 = document.getElementById("fruit2").value;
  selectedFruit.push(fruit2);
  const fruit3 = document.getElementById("fruit3").value;
  selectedFruit.push(fruit3);
  const instructions = document.getElementById("instructions").value;

  const nutrutionSum = getValues(fruitfile, selectedFruit);

  // Get the current date
  const date = new Date();

  // Build the output string
  const outputInfo = `
    Input values:
    First name: ${firstName}
    Email: ${email}
    Phone: ${phone}
    Fruits: ${fruit1}, ${fruit2}, ${fruit3}
    Instructions: ${instructions}
    ${nutrutionSum}
    Order date: ${date.toDateString()}
  `;

  output.innerHTML = outputInfo;
}

formElement.addEventListener("submit", handleFormSubmit);

function getValues(object, array) {
  let totalCab = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;
  array.forEach((fruit) => {
    const foundFruit = object.find((item) => item.name === fruit);
    if (foundFruit) {
      totalCab += foundFruit.nutritions.carbohydrates;
      totalProtein += foundFruit.nutritions.protein;
      totalFat += foundFruit.nutritions.fat;
      totalSugar += foundFruit.nutritions.sugar;
      totalCalories += foundFruit.nutritions.calories;
    }
  });
  return `
  Carbohydrates: ${parseFloat(totalCab)};
  Protein: ${parseFloat(totalProtein)};
  Fat: ${parseFloat(totalFat)};
  Sugar: ${parseFloat(totalSugar)};
  Calories: ${parseFloat(totalCalories)};
  `
}

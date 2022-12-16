const formElement = document.querySelector("#myForm");
const outputElement = document.querySelector("#output");
const fruitDataUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

function handleFormSubmit(event) {
  // Prevent the form from being submitted and refreshing the page
  event.preventDefault();

  // Get the input values
  const firstName = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const instructions = document.getElementById('instructions').value;

  // Calculate the total amount of carbohydrates, protein, fat, sugar, and calories based on the selected fruits
  const totalCarbs = calculateTotalCarbs(fruit1, fruit2, fruit3);
  const totalProtein = calculateTotalProtein(fruit1, fruit2, fruit3);
  const totalFat = calculateTotalFat(fruit1, fruit2, fruit3);
  const totalSugar = calculateTotalSugar(fruit1, fruit2, fruit3);
  const totalCalories = calculateTotalCalories(fruit1, fruit2, fruit3);

  // Get the current date
  const date = new Date();

  // Build the output string
  const output = `
    Input values:
    First name: ${firstName}
    Email: ${email}
    Phone: ${phone}
    Fruits: ${fruit1}, ${fruit2}, ${fruit3}
    Instructions: ${instructions}

    Order date: ${date.toDateString()}

    Total carbs: ${totalCarbs}
    Total protein: ${totalProtein}
    Total fat: ${totalFat}
    Total sugar: ${totalSugar}
    Total calories: ${totalCalories}
  `;

  // Display the output in the formatted output area
  const outputArea = document.getElementById('outputArea');
  outputArea.innerHTML = output;
}

formElement.addEventListener('submit', handleFormSubmit);

fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
    const selectElements = [
      document.querySelector('#fruit1'),
      document.querySelector('#fruit2'),
      document.querySelector('#fruit3')
    ];
    selectElements.forEach(select => {
      data.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.innerHTML = fruit.name;
        select.appendChild(option);
      });
    });
  });

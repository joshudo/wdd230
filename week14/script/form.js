const form = document.querySelector("#myForm");
const output = document.querySelector("#output"); // Change this to use the correct id

var currentDate = new Date();
var dateString = currentDate.toLocaleString();

// Adding a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from being submitted
  event.preventDefault();

  const name = document.querySelector("#fname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  // Retrieve the JSON data from the provided URL
  fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then((response) => response.json()) // Parse the data as a JavaScript object
    .then((data) => {
      // Get the fruit1, fruit2, and fruit3 values from the form
      const fruit1 = document.querySelector("#fruit1").value;
      const fruit2 = document.querySelector("#fruit2").value;
      const fruit3 = document.querySelector("#fruit3").value;

      // Initialize the values for carbs, protein, fat, sugar, and calories to 0
      let carbs = 0;
      let protein = 0;
      let fat = 0;
      let sugar = 0;
      let calories = 0;

      // Loop through the array of fruits in the JSON data
      data.forEach((fruit) => {
        // Check if the current fruit is one of the selected fruits
        if (
          fruit.name === fruit1 ||
          fruit.name === fruit2 ||
          fruit.name === fruit3
        ) {
          // If the fruit is one of the selected fruits, add its values to the totals
          carbs += fruit.carbs;
          protein += fruit.protein;
          fat += fruit.fat;
          sugar += fruit.sugar;
          calories += fruit.calories;
        }
      });

      // Use the calculated values to create the formatted data string
      const formattedData = `
    Hello ${name}!
  Your drink will be composed of ${fruit1}, ${fruit2}, ${fruit3}.
  The drink is composed of:
  carbohydrates: ${carbs}
  protein: ${protein}
  fat: ${fat}
  sugar: ${sugar}
  calories: ${calories}

  Order Date: ${dateString}
  Contact Email: ${email}
  Phone #: ${phone}
  `;

      // Add the formatted data to the output element
      output.innerHTML = formattedData;
    });
});

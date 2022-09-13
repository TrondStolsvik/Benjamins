//Get start and end values from the inputs
function getValues() {
  //Get the values from the inputs
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //Parse values of input to integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //Check and validate input
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //Generate numbers
    let numbers = generateNumbers(startValue, endValue);

    //Display the results
    displayNumbers(numbers);
  } else {
    alert("You must enter integers in both fields.");
  }
}

//Generate numbers based on start and end values
function generateNumbers(sValue, eValue) {
  //Declare empty array for numbers
  let numbers = [];
  //Loop over values from start to end
  for (let i = sValue; i <= eValue; i++) {
    //Add the number from each iteration to the numbers array
    numbers.push(i);
  }
  //Return numbers array
  return numbers;
}

//Display numbers in the table
function displayNumbers(numbers) {
  //Declare variable "templateRows" and set to ""
  let templateRows = "";

  //For loop through all items of numbers array
  for (let i = 0; i < numbers.length; i++) {
    //Declare string "className"
    let className = "even";

    //Declare number to numbers[i]
    let number = numbers[i];

    //if else test against % 2 to be 0
    if (number % 2 == 0) {
      //If number % 2 = 0, set className == "even"
      className = "even";
    } else {
      //else set className == "odd"
      className = "odd";
    }

    //For each iteration of loop, concatenate "templateRows" with the markup:
    //`<tr><td class="${className}">${number}</td></tr>`
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  //Show results in "results" element using getElementById.
  document.getElementById("results").innerHTML = templateRows;
}

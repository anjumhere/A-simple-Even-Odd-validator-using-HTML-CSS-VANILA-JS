// Get references to the input field, button, and the output element
const userInput = document.getElementById("user-input"); // Input field where user enters a number
const addBtn = document.getElementById("btn"); // Button to trigger the check
const endVal = document.getElementById("endVal"); // Element to display the result

// Clear the input field initially
userInput.value = "";

// Function to check if the entered number is odd or even
function checker() {
  let value = userInput.value.trim(); // Get the value from input and remove any leading/trailing spaces

  // Validation: Check if the input is empty or not a number
  if (value === "" || isNaN(value)) {
    endVal.innerHTML = "Please enter a valid number 😊"; // Show error message
    endVal.style.color = "red"; // Color the error message red
    return; // Stop the function if invalid input
  }

  // Convert the input string to a number
  const num = Number(value);

  // Check if the number is even or odd using modulo operator
  const result = num % 2 === 0 ? "Even" : "Odd";

  // Display the result in the endVal element
  endVal.innerHTML = `${value} is ${result}`;

  // Color the result: green for even, red for odd
  endVal.style.color = result === "Even" ? "green" : "red";
}

// Add click event listener to the button to trigger the checker function
addBtn.addEventListener("click", checker);

<h1>Odd and Even Number Checker</h1>

<p>
This is a simple web-based project that allows users to check whether a number is <strong>odd</strong> or <strong>even</strong>. It is built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. The project is beginner-friendly and a great way to practice basic DOM manipulation and conditional logic in JavaScript.
</p>
<h2> Screenshot </h2>
 <img src="Screenshot 2026-01-21 154523.png" alt="Screenshot" />
<h2>Features</h2>
<ul>
  <li>Enter a number in the input field and click the "Check" button to see the result.</li>
  <li>Validates the input to ensure it is a number.</li>
  <li>Displays an error message if the input is empty or invalid.</li>
  <li>Shows the result with a color code:
    <ul>
      <li><strong>Green:</strong> Even number</li>
      <li><strong>Red:</strong> Odd number or invalid input</li>
    </ul>
  </li>
  <li>Simple and clean user interface.</li>
</ul>

<h2>How It Works</h2>
<p>
1. The user enters a value in the input field. <br>
2. When the "Check" button is clicked, a JavaScript function is triggered. <br>
3. The function first trims the input to remove any extra spaces and checks if the input is a valid number. <br>
4. If the input is valid, it checks if the number is even or odd using the modulo operator <code>%</code>. <br>
5. The result is displayed dynamically in a text element and colored accordingly. <br>
6. If the input is invalid, an error message is shown in red.
</p>

<h2>Usage</h2>
<ol>
  <li>Open the HTML file in any modern web browser.</li>
  <li>Enter a number in the input field.</li>
  <li>Click the "Check" button.</li>
  <li>The result will be displayed below the button.</li>
</ol>

<h2>Code Explanation</h2>
<p>The main JavaScript logic works as follows:</p>
<ul>
  <li>Retrieve input, button, and output elements using <code>document.getElementById</code>.</li>
  <li>Clear the input field initially for better UX.</li>
  <li>Define a function <code>checker()</code> that:</li>
  <ul>
    <li>Trims the input value.</li>
    <li>Validates if it is a number using <code>isNaN()</code>.</li>
    <li>Converts the input to a number using <code>Number()</code>.</li>
    <li>Checks if it is even or odd using <code>num % 2 === 0</code>.</li>
    <li>Displays the result and changes text color based on the result.</li>
  </ul>
  <li>Attach the function to the button click event using <code>addEventListener</code>.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>HTML – For structuring the webpage.</li>
  <li>CSS – For styling the input, button, and result message.</li>
  <li>JavaScript – For handling user input, validation, and logic to check odd/even numbers.</li>
</ul>

<h2>Author</h2>
<p>Adnan Anjum</p>

<h2>License</h2>
<p>This project is open-source and free to use for learning purposes.</p>

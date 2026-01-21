<div align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-orange?style=for-the-badge" alt="Maintained" />

  <h1 align="center">🚀 Even–Odd Validator Pro</h1>
  <p align="center">
    <strong>A high-performance numerical analysis tool featuring advanced parity detection and sequential list generation.</strong>
  </p>
</div>

---

## 📖 Project Overview

<h2> Even Numbers Output</h2>
<img src="screenshots/even.png" alt="" />
<h2> Odd Numbers Output</h2>
<img src="screenshots/ODD.png" alt="" />
The **Even–Odd Validator Pro** is a modern web application designed to provide users with a seamless way to validate numerical parity. Unlike basic checkers, this tool processes ranges of data to provide a comprehensive breakdown of integers.

Wrapped in an **Extreme Glassmorphism UI**, the application prioritizes user experience with smooth animations, professional color-coding, and an optimized "slider" (scrollable) results area.

---

## ✨ Premium Features

- **Real-Time Validation:** High-speed detection of "Even" vs. "Odd" states using the modulo algorithm.
- **Dual-List Generation:** Dynamically generates and stores separate sequences of all even and odd numbers up to the input limit.
- **Advanced UI/UX:** \* **Glassmorphism:** Frosted glass effect with high-saturation background blurs.
  - **Bubble Background:** Ambient, floating mesh-gradient blobs for a professional look.
  - **Internal Slider:** Results are contained within a custom-styled scrollable window to maintain a fixed-height layout.
- **Mobile-First Design:** Fully responsive layout that adapts perfectly from high-res monitors to mobile devices.
- **State-Based Styling:** Dynamic color shifts (Green for success/even, Red for errors/odd).

---

## 🛠️ Technical Breakdown

### 1. Parity Logic

The application uses the **Modulo Operator** ($x \pmod 2$) to determine if a number is divisible by two. This is the most efficient mathematical way to check for parity in JavaScript.

### 2. Iterative String Processing

The `checker()` function executes a single-pass `for` loop. This avoids multiple passes over the data, ensuring the application remains fast even for large inputs.

```javascript
for (let i = 0; i <= num; i++) {
  if (i % 2 === 0) {
    evenNumbers += i + " "; // Appends to the even data set
  } else {
    oddNumbers += i + " ";  // Appends to the odd data set
  }
}
3. DOM & State Management
The script utilizes Global State variables (evenNumbers, oddNumbers) to cache the results once the "Check" button is pressed. This allows the user to toggle between "Even" and "Odd" lists instantly without re-calculating the data.

📂 Project Architecture
Plaintext

├── index.html   # Structural layout & HTML5 Semantics
├── style.css    # Extreme UI styling & Glassmorphism effects
├── cal.js       # Core mathematical logic & DOM manipulation
└── README.md    # Professional documentation
🚀 Installation & Usage
Clone the Repository: git clone https://github.com/yourusername/even-odd-validator.git

Open the App: Simply open index.html in any modern web browser.

Process Data: * Enter a number in the input field.

Click Check to see the primary result.

Click the Even or Odd buttons to view the full list in the scrollable result box.

🎨 Design Philosophy
The UI was built with the "Extreme Minimalism" concept:

Typography: Using Inter or Segoe UI for maximum readability.

Depth: Using backdrop-filter: blur() and layered box-shadows to create a 3D glass effect.

Animations: Smooth 0.3s transitions on all interactive elements for a premium feel.

👨‍💻 Author
Adnan Anjum Full-Stack Web Developer ---

📜 License
This project is licensed under the MIT License. You are free to fork, modify, and distribute this project for educational and professional purposes.
```

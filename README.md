# JavaScript DOM Manipulation - Event Listeners

This repository is a practical guide to understanding the **Document Object Model (DOM)** and implementing **Event Listeners** using JavaScript.

## 🚀 Project Overview
The current lesson focuses on making a static user interface interactive. By targeting specific HTML elements, we can trigger functions based on user behavior such as clicking or hovering.



---

## 🛠 Features

### 1. Click Events
We demonstrate how to trigger alerts using the `.addEventListener()` method. 
* **Method used:** `click`
* **Implementation:** Using named functions for cleaner, more maintainable code.

```javascript
const btn2 = document.querySelector(".btn-2");

function showAlert() {
  alert("Button 2 clicked!");
}

btn2.addEventListener("click", showAlert);

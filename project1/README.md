# JavaScript Quote Generator 📜

A simple, elegant web application that generates inspirational quotes at the click of a button. This project demonstrates core JavaScript concepts, including array manipulation, random number generation, and DOM event handling.

## 🚀 Features

- **Random Generation:** Uses a custom algorithm to pull random quotes from a curated list.
- **Responsive Design:** A clean, centered UI that works across different screen sizes.
- **Smooth Interaction:** Features active state button transitions for better user experience.
- **Google Fonts Integration:** Uses the 'Lato' and 'Roboto' font families for a modern look.

---

## 🛠 Technical Breakdown

### 1. The Quote Logic

The application stores quotes as an **Array of Objects**. Each object contains a `text` and an `author` property.

### 2. Randomization Formula

To pick a random quote, we use `Math.random()` combined with the length of the array:

```javascript
let random = Math.floor(Math.random() * quotes.length);
```

### 3. DOM Manipulation

When the button is clicked, the script selects the specific HTML elements by their IDs and updates their innerText to match the selected random quote.

```
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].text;
    author.innerText = quotes[random].author;
});

```

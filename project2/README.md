# JavaScript FAQ Accordion 🗂️

A smooth, interactive accordion component built with HTML, CSS, and Vanilla JavaScript. This project demonstrates how to handle multiple elements using loops and toggle state changes dynamically.

## 🚀 Key Features

- **State Toggling:** Uses `classList.toggle` to trigger CSS transitions.
- **Smooth Transitions:** Employs `overflow: hidden` and `transition` for a sliding effect.
- **Pseudo-elements:** Uses `::after` to switch between `+` and `-` icons without extra HTML.
- **Event Delegation:** Iterates through multiple containers using a `for` loop.

---

## 🛠 Technical Details

### 1. The "Active" State Logic

The magic happens by adding an `.active` class to the parent container. This triggers specific CSS rules that expand the height of the hidden answer.

```javascript
this.classList.toggle("active");
```

### 2. CSS Expansion

To allow for a smooth slide-down animation, the answer starts at height: 0 and expands to a fixed height when active.

```CSS
.content-container.active .answer {
  height: 150px; /* Expands when parent has .active class */
}
```

# DOM Manipulation: Event Propagation (Capturing Phase) 🌊

This project explores the **Event Propagation** cycle within the DOM. By nesting elements, we can observe exactly how events travel from the root of the document down to the target element.

## 🚀 The Concept: Event Capturing

Event propagation consists of three phases. In this specific lesson, we focus on the **Capturing Phase**.

1.  **Capturing Phase:** The event starts at the `window` and travels down the DOM tree toward the target.
2.  **Target Phase:** The event reaches the actual element that was clicked.
3.  **Bubbling Phase:** The event "bubbles" back up from the target to the `window`.

---

## 🛠 Implementation

### JavaScript Logic (`app.js`)

To enable **Capturing**, we set the third argument of `addEventListener` to `true`. This tells the browser to fire the event during the downward (capture) phase rather than the upward (bubble) phase.

```javascript
// Capturing enabled with the 'true' parameter
window.addEventListener("click", () => console.log("Window"), true);
document.addEventListener("click", () => console.log("Document"), true);

document.querySelector(".div2").addEventListener(
  "click",
  () => {
    console.log("DIV 2");
  },
  true,
);

document.querySelector(".div1").addEventListener(
  "click",
  () => {
    console.log("DIV 1");
  },
  true,
);

document.querySelector("button").addEventListener(
  "click",
  (e) => {
    // Logic to change button text on click
    console.log((e.target.innerText = "Clicked"));
  },
  true,
);
```

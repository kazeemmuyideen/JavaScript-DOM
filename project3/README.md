# JavaScript To-Do List 📝

A functional To-Do List application that allows users to add, complete, and delete tasks dynamically. This project highlights the use of **DOM Manipulation** to create and inject HTML elements directly via JavaScript.

## 🚀 Key Features

- **Dynamic Element Creation:** Uses `document.createElement` to build complex task structures on the fly.
- **Task Completion:** Implements "line-through" styling to mark tasks as finished.
- **Task Deletion:** Uses parent element navigation to remove specific tasks from the DOM.
- **Input Validation:** Prevents empty tasks from being added with user alerts.
- **Responsive Styling:** A clean, flexbox-based UI that adapts to task length.

---

## 🛠 Technical Implementation

### 1. Creating the Task Structure

When the "Plus" button is clicked, JavaScript generates a nested structure consisting of a `div`, a `li`, and two `buttons`.

### 2. Parent-Child Navigation

To delete or check a task, the script navigates the DOM tree using `parentElement`. This ensures that clicking a button only affects the specific task row it belongs to.

```javascript
// Navigating up the DOM to remove the entire task container
deleteButton.addEventListener("click", (e) => {
  let target = e.target;
  target.parentElement.parentElement.remove();
});
```

### 3. Dynamic Styling

The "Check" button directly manipulates the style object of the text element to provide immediate visual feedback.

```
JavaScript
checkButton.addEventListener("click", () => {
    checkButton.parentElement.style.textDecoration = "line-through";
});
```

~ 🎨 CSS Styling Highlights
Flexbox Layout: The task rows use display: flex with justify-content: space-between to keep the text on the left and buttons on the right.

Hover Transitions: Buttons feature smooth color transitions for a more professional "app-like" feel.

Custom Scroll: The #task-container serves as a dynamic wrapper that grows as tasks are added.

~ 📂 Project Structure
index.html: Contains the initial input field and the empty wrapper for tasks.

style.css: Defines the appearance of both static and dynamically created elements.

app.js: Contains the logic for creating elements, adding event listeners, and managing the task list.

~ 🧠 What I Learned
Creating Elements: Mastered the createElement, classList.add, and appendChild methods.

Template Literals: Used backticks (`) to easily insert variable data into text content.

Event Bubbling/Targeting: Understanding how to use the event object (e.target) to identify which specific button was clicked in a list.

~ 0⚙️ Setup
Clone the repository.

Ensure the FontAwesome CDN link is active in the index.html head.

Open index.html and start organizing your day!

---

### A Quick Tip for your Code:

In your `deleteButton` logic, you noticed you used `target.parentElement.parentElement.remove()`.

If a user clicks exactly on the **Icon** (`<i>`) instead of the **Button**, `e.target` becomes the icon. In that case, you might need an extra `.parentElement`. To make this "bulletproof," you can use the `.closest()` method:

```javascript
deleteButton.addEventListener("click", (e) => {
  e.target.closest(".task").remove(); // This finds the nearest parent with the class 'task'
});
```

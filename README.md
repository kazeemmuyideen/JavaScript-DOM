# DOM Manipulation: Reveal More Toggle 🔓

This section of the repository demonstrates how to use JavaScript to show and hide content dynamically by manipulating CSS classes.

## 🚀 How it Works

The project uses a "Reveal More" button that, when clicked, toggles the visibility of a hidden text box. This is a common UI pattern used in FAQs, product descriptions, and "read more" sections.

---

## 🛠 Technical Implementation

### 1. CSS Visibility Control

The content is hidden by default using `display: none`. To reveal it, we use a separate class that overrides the hidden state. We use `!important` to ensure the reveal class takes precedence regardless of CSS specificity order.

```css
/* Hidden by default */
.hidden-content {
  display: none;
}

/* Added via JavaScript to show the content */
.reveal-content {
  display: block !important;
}
```

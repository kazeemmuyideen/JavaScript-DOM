const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

revealBtn.addEventListener("click", () => {
  // toggle() automatically adds the class if it's missing,
  // and removes it if it's already there.
  hiddenContent.classList.toggle("reveal-content");

  // Optional: Update button text
  if (hiddenContent.classList.contains("reveal-content")) {
    revealBtn.innerText = "Hide Content";
  } else {
    revealBtn.innerText = "Reveal More";
  }
});

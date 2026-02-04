//  Variables

/*

const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
*/

// "Single Open" accordion
const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // 1. Remove 'active' from all other containers first
    for (let j = 0; j < accordion.length; j++) {
      if (accordion[j] !== this) {
        accordion[j].classList.remove("active");
      }
    }
    // 2. Toggle the one you clicked
    this.classList.toggle("active");
  });
}

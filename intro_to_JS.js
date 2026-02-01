// DOM Manipulation

//getElementById()
// heading = document.getElementById("main-heading");
// console.log(heading);

//getElementByClassName()
// listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// getElementByTagName()
// listItems = document.getElementsByTagName("li");
// console.log(listItems);

//querySelector()

// querySelectorAll()

//  styling Elements

// heading = document.getElementById("main-heading");
// listItems = document.getElementsByClassName("list-items");
// heading.style.color = "blue";
// heading.style.fontSize = "50px";
// for (let i = 0; i < listItems.length; i += 2) {
//   listItems[i].style.color = "green";
// }

/* ?*/

// Creating

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Addinng elements
ul.append(li);

// Modifying Text
const firstListItem = document.querySelector(".list-items");
li.innerText = "DC Universe";

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

/* */
// Modifying Attributes and Classes
// li.setAttribute("class", "list-items");
// li.removeAttribute("class");
// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id"));

li.classList.add("list-items");

// li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));

// Removing Elements
// li.remove();
// ul.remove();

// DOM Manipulation

// Traverse the DOM

// Parents Node Traversal
let ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);
// console.log(ul.parentNode.parentNode);

// const htmlElement = document.documentElement;
// console.log(htmlElement.parentNode);
// console.log(htmlElement.parentElement);

//Child Node Traversal
// console.log(ul.childNodes);
// ul.childNodes[1].style.backgroundColor = "red";
// console.log(ul.firstChild);
// console.log(ul.lastChild);
//

//
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

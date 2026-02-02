// DOM Manipulation

// Event Propagation
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true,
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true,
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true,
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true,
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "Clicked"));
  },
  true,
);

// e.stopPropagation
// change the stop attribute by using  e.stopDefault()
//i.e change

/**
 *  <div class="div1">
        1
        <button>Click</button>
      </div>
 */

// TO

/**
 *  <div class="div1">
        1
        <a href="" class ="button">
      </div>

       The Button  style add "display:block"
      button {}
 */


let val;


const list = document.querySelector(".collection"); // ul

const fisrtListItem = document.querySelector("li:nth-child(1)");
const lastListItem = document.querySelector("li:nth-child(5)");

val = list.children;
val = list.children[0].children[0];

// first child
val = list.firstElementChild;

// last child
val = list.lastElementChild;

// child count
val = list.childElementCount;

// get the parent element
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get a next sibling
val = fisrtListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// Get a previous sibling
val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
.previousElementSibling;


console.log(val);
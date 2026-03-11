

// Remove element
const list = document.querySelector("li");

// list.remove();

// const lists = document.querySelectorAll("li");

// lists.forEach(function(list){
//     list.remove();
// })

// Class && Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST

val.add("javid");

val.forEach(function(cls){
    console.log(cls);
});

val.remove("test");

val.replace("javid", "jagan");

// console.log(val);


// document.querySelector(".clear-tasks").addEventListener("click", function(){
//   console.log("CLICKED");
// })

let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);


document.querySelector("#task-title").innerText = count;

function onClick(){

    count = count + 1;

    document.querySelector("#task-title").innerText = count;

    const body = document.querySelector("body");

    // body.classList.add("add-color");

    body.classList.toggle("add-color");
}

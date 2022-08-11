const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// let choix = true;

// function change () {
//     let button = document.getElementById("button");
//     if (choix == true){
//         button.style.backgroundColor = "green";
//         choix = false;
//     }
//     else {
//         button.style.backgroundColor = "pink";
//         choix = true;
//     }  
// }  

let colors = ["bleu", "yellow", "black", "pink", "violet"];
let police = ["cursive"]
// let button = document.getElementById("button");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    var randomColor = colors [Math.floor(Math.random() * colors.length)]
    // let container = document.getElementById("container");
    let header = document.getElementById("header");

    // container.style.background = randomColor;
    header.style.background = randomColor;

    let typo = document.getElementById("typo");

    typo.style.fontfamilly = police;
})

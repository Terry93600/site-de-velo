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

let choix = true;

function change () {
    let button = document.getElementById("button");
    if (choix == true){
        button.style.backgroundColor = "green";
        choix = false;
    }
    else {
        button.style.backgroundColor = "pink";
        choix = true;
    }
    
}
// const formHeader = document.getElementsByClassName("formHeader");

// // formHeader.addEventsListener(hover, ()=>{
// //     formHeader.classList(add, "animate")
// // });


/*HAMBURGER*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("click")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menuItem");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


/*HTML Form Validation*/

// I tried my best but e no work. I don tire.
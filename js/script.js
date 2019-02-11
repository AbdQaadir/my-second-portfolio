//Preloader
window.addEventListener("load", () =>
    document.querySelector(".preloader").classList.add("hidePreloader")
);


//SCROLL EFFECT
// let bar = document.querySelector("#progress");
// let navBar = document.querySelector('.navbar');
// let navLink = document.querySelectorAll('.nav-link');
// window.addEventListener("scroll", scrollFunction)


// function scrollFunction() {
//     let max = document.body.scrollHeight - innerHeight;
//     let navBar = document.querySelector('.navbar');
//     // bar.style.width = `${(pageYOffset / max) * 100}%`;

//     if (`${(pageYOffset / max) * 100}` > 5) {

//         navBar.classList.add('navbar-change');
        
//     } else if (`${(pageYOffset / max) * 100}` < 5) {
//         // let navBar = document.querySelector('.navbar');
//         navBar.classList.remove("navbar-change");
//     };

// };

//Typewriter Effect
new TypeIt('#typewriter', {
    strings: ['Hello! I\'m Lateef Qaadir Olayinka,','A Front-End Developer based in Ibadan, Nigeria.'],
    speed: 150,
    waitUntilVisible: true,
    cursor: false,
    lifeLike: true,
  }).go();

  new TypeIt('#phoneNumber', {
    strings: "+234 9035 394 858",
    waitUntilVisible: true,
    cursor: false,
    lifeLike: true,
    speed: 550,
  }).go();

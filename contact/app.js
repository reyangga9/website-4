// ambil id mobile menu dan navbar menu
const mobileMenu = document.querySelector("#hamburger_bar");
const navbarMenu = document.querySelector(".nav-link");
const footerBar = document.querySelectorAll(".footer_bar")
const footerMenu = document.getElementsByClassName("footer_menu");



mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
    console.log('BISA')
})


// for (let i = 0; i < )

//     footerBar.addEventListener('click', function() {
//     footerMenu.classList.toggle('active');
//     console.log('bisa');
// })


for (let i = 0; i < footerMenu.length; i++) {
    footerBar[i].addEventListener("click", function() {
        footerMenu[i].classList.toggle('active');
        footerBar[i].classList.toggle('is-active');


    })

}
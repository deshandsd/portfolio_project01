
//navbar section animation //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// end navbar seciotn //


//animation//

const the_animation = document.querySelectorAll('.animation-right, .animation-left , .animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add('scroll-animation');
        }
        else {
            entry.target.classList.remove('scroll-animation');

        }

        
    })
});

console.log(the_animation);

for (let i =0; i < the_animation.length; i++){
    const elements = the_animation[i];

    observer.observe(elements);


}
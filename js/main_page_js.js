
const aboutMe = document.querySelector(".about_me-wrapper");
const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector(".nav");
const li = document.querySelectorAll("li");
const a = document.querySelectorAll("a");


function debounce (func, wait = 20, immediate = true){
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function fixedNav () {
    const aboutMeHeight = aboutMe.clientHeight;
    const navHeight = nav.clientHeight;
    if (window.scrollY > navHeight ) {
        nav.classList.add("fixed");
        for (let i = 0; i < li.length; i++) {
            li[i].classList.add("fixed");   
            a[i].classList.add("fixed");
        }
        
    } else if (nav.classList.contains("fixed") && window.scrollY < navHeight) {
        nav.classList.remove("fixed");
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("fixed");   
            a[i].classList.remove("fixed");
        }
    } else {
        nav.classList.remove("fixed");    
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("fixed");   
            a[i].classList.remove("fixed");
        }
    }
}

window.addEventListener("scroll" , fixedNav);


































// //half- way the div 
    // const slideInAt = (window.scrollY - window.innerHeight) - 
    //   aboutMe.clientHeight / 2;
    // // bottom of div
    // console.log(scrollY);
    // const aboutMeBottom = aboutMe.offsetHeight  + aboutMe.clientHeight;
    // const isHalfShown = slideInAt > aboutMe.offsetHeight;
    // const isNotScrolledPast = window.scrollY < aboutMeBottom;
    // console.log(isNotScrolledPast);
    // if () {
    //     aboutMe.classList.add('active');
    // } else {
    //     aboutMe.classList.remove('active');
    // }
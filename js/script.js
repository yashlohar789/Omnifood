var nav= document.querySelector(".header-section");
var hero= document.querySelector(".hero-section");


window.addEventListener("scroll",function(){
    if(window.scrollY > nav.clientHeight){
        nav.classList.add("display");
    }
    else{
         nav.classList.remove("display");
    }
 })

 window.addEventListener("scroll",function(){
    if(window.scrollY > hero.clientHeight){
        nav.classList.add("active");
    }
    else{
         nav.classList.remove("active");
    }
 })




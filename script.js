const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    const body = document.querySelector('body');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); 
        body.classList.toggle('stop-scrolling'); 
    });
    
    burger.addEventListener('click',() =>{   
        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navSlide 0.5s forwards`;
          } else {
            nav.style.animation = `navSlideOut 0.5s`;
          }
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
        
    });
    
}

navSlide();

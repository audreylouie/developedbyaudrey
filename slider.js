const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction = -1;

prev.addEventListener('click', function() {
    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(33.3%)';
});

next.addEventListener('click', function() {
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
      carousel.style.justifyContent = 'flex-start';
      direction = -1;
    }
    slider.style.transform = 'translateX(-33.3%)';
  });

slider.addEventListener('transitionend', function(){

    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
    }
    else if (direction === 1){
        slider.prepend(slider.lastElementChild);
    }
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.5s';
    });
    
});
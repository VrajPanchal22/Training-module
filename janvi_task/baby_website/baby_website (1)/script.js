var slideIndex, slides, dots;
let nextButton = document.getElementById('slide-arrow-next');
let prevButton = document.getElementById('slide-arrow-prev');
let slider = document.getElementById('slider');
slides = slider.getElementsByClassName("CarouselImgDiv");


// add slides-1 number of dots after slides
function init_galary() {
    slideIndex = 0;
    dots=[];
    var dotContainer = document.getElementById('dotContainer');

    for(var i=0 ; i<slides.length-1;i++){
        var dot= document.createElement("span");
        dot.classList.add("dots");
        dotContainer.append(dot);
        dots.push(dot);
    }
    dots[0].classList.add("active");
}
init_galary();


//show previous slide
function prev_Button(){
    slider.append(slides[0]);
    active_Dot();
}


//show next slide
function next_Button(){
    slider.prepend(slides[slides.length-1]);
    active_Dot();
}

//toggle the class of dots
function active_Dot(){
    var id=slides[0].getAttribute('id');
    if(id == "Img2"){
        dots[0].classList.toggle("active");
        dots[1].classList.toggle("active");
    }
}
//call prev_button function after 5 sec.
setInterval(prev_Button,5000);

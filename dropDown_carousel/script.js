
const menuBtn = document.getElementById("menuBtn");
const dropDown = document.querySelector(".menuDropDown");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carouselImages = document.querySelectorAll(".carouselImages");
const placeHolder = document.querySelectorAll('.placeHolder');

let currentIndex = 0;

menuBtn.addEventListener("click" , function() {
    dropDown.classList.toggle('menuDisplay');
});

function updateCarousel(index){
    carouselImages.forEach(function(image , i){
        image.classList.remove('shown');
        if(i === index){
            image.classList.add('shown');
        }
        currentIndex = index;
    })
}

function updatePlaceHolder(index){
    placeHolder.forEach(function(place , i){
        place.classList.remove('currentSlidePlaceHolder');
        if(i === index ){
            place.classList.add('currentSlidePlaceHolder');
        }
        currentIndex = index;
    })
}

function nextSlide(){
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel(nextIndex);
    updatePlaceHolder(nextIndex);
}

function prevSlide(){
    const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel(prevIndex);
    updatePlaceHolder(prevIndex);
}

placeHolder.forEach((ele , i)=>{
    ele.addEventListener('click' , function(){
        let currIndex = ele.getAttribute('index');
        updateCarousel(Number(currIndex));
        updatePlaceHolder(Number(currIndex));
    })
})

updateCarousel(currentIndex);
setInterval( nextSlide , 5000);

nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);
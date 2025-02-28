


const images = document.querySelectorAll(".carouselImages");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next")
const menuBtn = document.querySelector("#menuBtn");
const menuDrop = document.querySelector(".menuDropDown");
let currentIndex = 0;

menuBtn.addEventListener("click" , function(){
    menuDrop.classList.toggle("menuDisplay")
})

function updateCarousel(){
    images.forEach(function(img , index){
        img.style.display = index === currentIndex ? "block" : "none";
    });
}

prevBtn.addEventListener("click" , function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
})


nextBtn.addEventListener("click" , function(){
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    updateCarousel();
})

updateCarousel();
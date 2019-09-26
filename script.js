`use strict`;

const buttonPrevious = document.querySelector(".btn1");
const buttonNext = document.querySelector(".btn2");
const li = document.querySelectorAll("li");
let position = 0;

function nextImage() {
    position++;

    if (position == li.length){
        position = 0;
    }

    for(let i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
    }
    
    
    li[position].classList.add('active');

}

buttonNext.addEventListener("click", nextImage);
buttonPrevious.addEventListener("click", previousImage)
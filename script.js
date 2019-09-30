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

function nextImageWithArrowKeyboard(event) {

	if (event.keyCode === 39) {
		nextImage();	
	}
}
   

function previousImage() {

	position--;

	if (position < 0) {
		position = li.length-1;
	}

	for (let i = li.length-1; i >= 0 ;i--) {
		li[i].classList.remove("active");
	}

	li[position].classList.add("active");
}

function previousImageWithArrowKeyboard(event) {
	
	if (event.keyCode === 37) {
		previousImage();
	}
}



buttonNext.addEventListener("click", nextImage , );
buttonPrevious.addEventListener("click", previousImage)
document.addEventListener("keyup", nextImageWithArrowKeyboard);
document.addEventListener("keyup", previousImageWithArrowKeyboard);
// Write your JavaScript here...
// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById("btn-menu");
const bar = document.getElementById("bar");
const nav = document.getElementById("main-navigation");

btnMenu.addEventListener("click", openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener("mousedown", function (e) {
	e.preventDefault();
});

function openMenu() {
	body.classList.toggle("show");
	nav.classList.add("activated");
	body.classList.add("animating");
}

// Create a media query list using
// matchMedia
const mql = window.matchMedia("(min-width: 768px)");

// Add a Media Query Listener to the
// above media query list
mql.addListener(removeTransition);

// Function to remove the transition
// from the navigation when the user
// resizes the browser to desktop
// sizes. In this case when the
// screen width becomes wider ....
function removeTransition(e) {
	// e -> is the event object
	// e.matches -> stores a true false
	// value depending if the media query
	// list set above matches or not
	if (e.matches) {
		body.classList.remove("show", "animating");
		nav.classList.remove("activated");
	}
}

// Keep overflow hidden on until the menu
// transition has finished
body.addEventListener("transitionend", function () {
	if (!body.classList.contains("show")) {
		body.classList.remove("animating");
	}
});

//Carousel JS
console.log("js working");
var slideIndex = 1;
var timeout;

showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
	clearTimeout(timeout);
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	if (n == undefined) {
		n = ++slideIndex;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = sides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	timeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
}

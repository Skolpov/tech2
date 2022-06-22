
// Scroll Header

window.onscroll = function() {myFunction()};

var headerD = document.querySelector(".header-desktop"); 
var headerT = document.querySelector('.header-tablet');
var headerM = document.querySelector('.header-mobile');

var headerWrap = document.querySelector('.header-wrap');
var sticky = headerD.offsetTop; 
var section = document.querySelector('.first-screen');

function myFunction() {
	if (window.pageYOffset > sticky) {
		headerD.classList.add("see");
		headerT.classList.add("see");
		headerM.classList.add("see");
	} else {
		headerD.classList.remove("see");
		headerT.classList.remove("see");
		headerM.classList.remove("see");
	}
};



// var mediaQuery = window.matchMedia("screen and (min-width: 768px)");
// mediaQuery.addListener(foo);
// foo(mediaQuery);

// function foo(mq) {
    
// }



// ==========
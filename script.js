const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".menu");
const logoEl = document.querySelector("#logo");
const barEL = document.querySelectorAll(".bar");
const projects = document.querySelectorAll(".projects__grid__items")
const paragraphs = document.querySelectorAll(".about-p")



const options = {
  root: document.querySelector('.projects__grid'),
  // rootMargin: "-460px",
  threshold: 1,
};

const observer = new IntersectionObserver(
  entries =>{
    entries.forEach(entry => {
      entry.target.classList.toggle("animate", entry.isIntersecting)
      if(entry.isIntersecting) observer.unobserve(entry.target)
    })
  },options)

  projects.forEach(project => {
    observer.observe(project)
  })



hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navMenuEl.classList.toggle("active");
    logoEl.classList.toggle("active");
})


function closeMenu() {
  hamburgerEl.classList.toggle("active");
  navMenuEl.classList.toggle("active");
  logoEl.classList.toggle("active");
}

// OVERLAY BUTTON

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}


// HOMEPAGE ANIMATIONV + FUNCTIONS

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var a = 0;
	var timer = setInterval(function() {
    if (a < text.length) {
      element.append(text.charAt(a));
      a++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 40;
var heroH3 = document.querySelector('#hero-h3');
var delayHero = heroH3.innerHTML.length * speed + speed;

typeEffect(heroH3, speed);
// type affect to body
// setTimeout(function(){
//   heroH1.style.opacity = "1";
//   typeEffect(heroH1, speed);
// }, delay);





// DELAY FUNCTION 

let delayedElements = document.querySelectorAll('.delayed-display1');

for (let delayedEl of delayedElements) {
  let delayedBy = Number(delayedEl.dataset.delayedBy);

  setTimeout(function() {
    delayedEl.style.display = "revert";
  }, delayedBy);
}









// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};


var header = document.getElementById("portfolio-header")

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    barEL.classList.add("white-menu");
  } else {
    header.classList.remove("sticky");
    barEL.classList.add("white-menu")
  }
}

// PROJECTS 

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    filterRemoveClass(x[i], "showFilter");
    if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], "showFilter");
  }
}

// Show filtered elements
function filterAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var filterBtnContainerEl = document.getElementById("filterBtnContainer");
var btns = filterBtnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// CONTACT FORM BUTTONS 

function resetForm() {
  document.getElementById("contact-form").reset();
}





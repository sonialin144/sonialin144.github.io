// nav toggle 
var about_panel = document.querySelector(".about-panel");
var contact_panel = document.querySelector(".contact-panel");
// var body = document.querySelector("body");
var about_button = document.querySelector(".about");
var about_close_button = document.querySelector(".about-close"); 
var contact_button = document.querySelector(".contact");
var contact_close_button = document.querySelector(".contact-close"); 

window.addEventListener("load", function() {
    about_panel.style.visibility = 'hidden';
    contact_panel.style.visibility = 'hidden';
});

about_button.addEventListener("click", function(){
    if(about_panel.style.visibility == 'hidden' && contact_panel.style.visibility == 'hidden'){ //open
        about_panel.style.visibility = 'visible';
        about_panel.style.animation = "1s panelopen";
    }
});
about_close_button.addEventListener("click", function(){
        if(about_panel.style.visibility == 'visible') { //close
            about_panel.style.visibility = 'hidden';
            about_panel.style.animation = "1s panelclose";
        }
});

contact_button.addEventListener("click", function(){
    if(contact_panel.style.visibility == 'hidden' && about_panel.style.visibility == 'hidden'){ //open
        contact_panel.style.visibility = 'visible';
        contact_panel.style.animation = "1s panelopen";
    }
});
contact_close_button.addEventListener("click", function(){
        if(contact_panel.style.visibility == 'visible') { //close
            contact_panel.style.visibility = 'hidden';
            contact_panel.style.animation = "1s panelclose";
        }
});

/*reveal elements on scroll*/
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
  
// i dont remember why i added links this way 
  window.addEventListener("load", function() {
    document.querySelector(".cygnus").addEventListener("click", ()=>{window.location = "https://devpost.com/software/cygnus";})
    document.querySelector(".envision").addEventListener("click", ()=>{window.location = "envision.html";})
   // document.querySelector(".astro").addEventListener("click", ()=>{window.location = "https://sonialin.itch.io/the-adventures-of-astro-boy";})
   // document.querySelector(".hunt").addEventListener("click", ()=>{window.location = "https://tommyho.itch.io/yume";})
    document.querySelector(".ari").addEventListener("click", ()=>{window.location = "https://sonialin144.github.io/si-project-ari-site/";})
    document.querySelector(".job").addEventListener("click", ()=>{window.location = "https://bxscience.edu/pdf/JOB2019-2020.pdf";})
    document.querySelector(".yg").addEventListener("click", ()=>{window.location = "https://www.younggovernors.org/2020-food-culture";})
    document.querySelector(".edel").addEventListener("click", ()=>{window.location = "https://www.figma.com/file/QLCEYS9YnqkoIpw3AbygeH/DP2-Prototype?node-id=0%3A1&t=e9TWnZzo0pLpq1U8-1";})
    document.querySelector(".roguelite").addEventListener("click", ()=>{window.location = "https://sonialin.itch.io/idk";})
    document.querySelector(".study").addEventListener("click", ()=>{window.location = "milk.html";})
    document.querySelector(".art").addEventListener("click", ()=>{window.location = "art.html";})
    document.querySelector(".airplay").addEventListener("click", ()=>{window.location = "https://www.igym.solutions";})
    document.querySelector(".tennis").addEventListener("click", ()=>{window.location = "gogotennis.html";})
    document.querySelector(".train").addEventListener("click", ()=>{window.location = "train.html";})
    document.querySelector(".cse-sim").addEventListener("click", ()=>{window.location = "cse-sim.html";})
    document.querySelector(".miverse").addEventListener("click", ()=>{window.location = "miverse.html";})
    document.querySelector(".nuclear").addEventListener("click", ()=>{window.location = "nuclear.html";})
    document.querySelector(".witch").addEventListener("click", ()=>{window.location = "witch.html";})
    document.querySelector(".detroit").addEventListener("click", ()=>{window.location = "detroit.html";})



});

//filter selection 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
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

var btnContainer = document.querySelector(".filter-button-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
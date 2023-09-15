document.querySelector("#aboutbtn").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#discover").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#projectbtn").addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#contactbtn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#homeicon").addEventListener("click", () => {
  document.querySelector(".index").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#abouticon").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#projecticon").addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({
    behavior: "smooth",
  });
});
document.querySelector("#contacticon").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});
var target = document.querySelector(".about");
var target2 = document.querySelector(".projects");
var target3 = document.querySelector("#contact");
var icons = document.querySelectorAll(".sidebar img");
var test = document.querySelector("#test");
var sidebar = document.querySelector(".sidebar");
var windowHeight = window.innerHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > (5 * windowHeight) / 2) {
    sidebar.style.filter = "invert(0)";
    sidebar.style.opacity = "1";
  } else if (
    window.scrollY > (3 * windowHeight) / 2 &&
    window.scrollY <= (5 * windowHeight) / 2
  ) {
    sidebar.style.filter = "invert(1)";
  } else if (
    window.scrollY > windowHeight / 2 &&
    window.scrollY <= (3 * windowHeight) / 2
  ) {
    sidebar.style.pointerEvents = "auto";
    sidebar.style.filter = "invert(0)";
    sidebar.style.opacity = "1";
    icons.querySelector("#homeicon")?.classList.add("active")
  } else {
    sidebar.style.opacity = "0";
    sidebar.style.pointerEvents = "none";
  }
});
var memoji = document.querySelector("#memoji");
memoji.addEventListener("suspend", () => {
  memoji.play();
});
$(document).ready(function(){
  if (isScrolledIntoView('#about-text')){
  }})
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function(){
  $('.loader').delay(1800).fadeOut(500,()=>{
    $('#loader-container').delay(1000).fadeOut(100,()=>{
      $('body').css('overflow','auto')
    })
  })
})  
// var form=document.querySelector('#form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let name=e.target[0].value;
//     let email=e.target[1].value;
//     let message=e.target[2].value;
//     alert('Form submitted');
// })

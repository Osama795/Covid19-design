document.querySelector(".navbar-toggler").onclick = () => {  
  // Toggle Class fa-times And fa-align-justify
  document.querySelector(".navbar-toggler > i").classList.toggle('fa-times');
  document.querySelector(".navbar-toggler > i").classList.toggle('fa-align-justify');
  if (document.querySelector(".navbar-toggler > i").classList.contains("fa-times")) {
    document.querySelector(".fa-times").style.color = "var(--main-color)";
  } else {
    document.querySelector(".fa-align-justify").style.color = "#FFF";
    }
};
/*````````````````````````````````````````````````````````*/
// Select All Links
const allLinks = document.querySelectorAll(".nav-item .nav-link");

function scrollToSomWhere(elements) {

  elements.forEach(el => {

    el.addEventListener("click", (e) => {

      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
      
      });

      // handelActiveClass(e);
    });
    
  });
  
}
scrollToSomWhere(allLinks);
/*```````````````````````````````````````````````````````*/
// Trigger Nice Scroll Plugin
$('html').niceScroll({
  cursorcolor: 'var(--main-color)',
  cursorwidth: '10px',
  cursorborder: 'none',
  cursorborderradius: 0
});

/*``````````````````````````````````````````````````````*/
// Handel Active State
function handelActiveClass(event) {

  // Remove Active Class
  event.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  event.target.parentElement.classList.add("active");

}
/*```````````````````````````````````````````````````````*/
let scrollButton = document.querySelector('.scroll-top');

window.onscroll = () => {
  if (this.pageYOffset >= 700) {
    	scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
    
// fixed Menu And Baground On Scroll
let nav = document.querySelector(".navbar-light");
  
  if (this.pageYOffset >= 100) {
      nav.style.position = "fixed";
      nav.style.background = "#06133e";
      nav.style.width = "100%";
    } else {
      nav.style.position = "absolute";
      nav.style.background = "transparent";
    }

// Color Of Dropdown Language
let langdrop = document.querySelector(".lang .dropdown-menu");
let dropdownItem = document.querySelectorAll(".lang .dropdown-menu .dropdown-item");
let headerHeight = document.querySelector("header").scrollHeight;
    if (this.pageYOffset >= headerHeight) {
      langdrop.style.background = "#06133f";
      dropdownItem.forEach(el => {el.style.color = "#FFF";});
    } else {
      langdrop.style.background = "#FFF";
      dropdownItem.forEach(el => {el.style.color = "#000";});
    }
};

// Click On Button To Scroll Top
scrollButton.onclick = () => {

  document.querySelector("html body").scrollIntoView({
  
    behavior: 'smooth',

    scrollTop: 0
    
  });
};
/*```````````````````````````````````````````````````````*/
// Loading Screen
window.onload = () => {
// $(window).load(function ()
// {
  // Loading Elements
  $('.loading .spinner').fadeOut(3000, 
    function() {
      // Show Scroll For Body
      $('body').css('overflow-y', 'auto');
      $(this).parent().fadeOut(3000, function() {
        $(this).remove();
      });
    });
// });
};
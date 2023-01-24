import "./style.css";
import "./style.scss";
import "./slidder.scss";
import wave1 from "./wave1.svg";
import me from "./me.png";
import back from "./back1.svg";
import html_logo from "./html.png";
import css_logo from "./css.png";
import php_logo from "./php.png";
import js_logo from "./js.png";
import bootstrap_logo from "./bootstrap.png";
import wordpress_logo from "./wordpress.png";
import laravel_logo from "./laravel.png";
import angular_logo from "./angular.png";

document.querySelector("#head").innerHTML = `

        <nav class="navbar" id="menu">

            <h1 class="logo"><a href="#head">De Koven</a> </h1>


             <ul class="menu">
                <li class="menu-item"><a href="#head">Home </a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#skills">Skills</a></li>
                <li class="menu-item"><a href="#project">Project</a></li>
                <li class="menu-item"><a href="#Achievements">Achievements</a></li>
                <li class="social  linkedin"><a href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/" target="_blank" rel="noreferer noopener"> <i class="fab fa-linkedin"></i> </a></li>
                <li class="social  twitter"><a href="https://twitter.com/DeKoven97" target="_blank" rel="noreferer noopener"><i class="fab fa-twitter-square"></i></a></li>

             </ul>

        </nav>


<!------moile menu--->
  <h1 class="logo2"><a href="#head">De Koven</a> </h1>
<div class ="Mmenu">

 <input type="checkbox" id="active">
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
<li><a  id="cb"  href="#head">Home</a></li>
<li><a  id="b" href="#about">About</a></li>
<li><a  id="d" href="#skills">skills</a></li>
<li><a  id="e" href="#project">Project</a></li>
<li><a  id="f" href="#achievements">achievements</a></li>
<a class="msocial" href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/" target="_blank" rel="noreferer noopener"> <i class="fab fa-linkedin"></i> </a></li>
  <a  class="msocial"  href="https://twitter.com/DeKoven97" target="_blank" rel="noreferer noopener"><i class="fab fa-twitter-square"></i></a></li>

</ul>
  
</div>
</div>



















   <div class="herosection" >

          

        <div class="slogan">
        
        
           <!-- <img  src="${wave1}" class="bgwave1" alt="wave"    />-->
        
           <div class="title " >Creating website that engage users</div>
             <p class="short animate__animated animate__backInLeft">Web design is not about making a website it’s about making an investment in your
                    organization.
                    Successful web design takes into account more than just aesthetics… It’s a reflection of you, your
                    company, and your vision.</br>So let's Build a website that tells your story in a memorable way</p>
        
        
        <a href="#project" class="heroCTA">Project &darr; </a>
        
        </div>



<img class="heroPic"   src="${back}" />





                        <div class="ocean">
                             <div class="wave"></div>
                             <div class="wave"></div>
                             <div class="wave"></div>
                        </div>

    </div>


`;

// ----------------------Fixed Navbar

window.onscroll = function () {
  fixedNav();
};

// create variable
// var logo = document.getElementById("logo")
var header = document.getElementById("menu");
var sticky = header.offsetTop;

// function
export function fixedNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // logo.classList.remove("hide")
    // logo.classList.add("logo")
  } else {
    header.classList.remove("sticky");
    // logo.classList.remove("logo")
    // logo.classList.add("hide")
  }
}

// --------change active on scrolll

const links = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

// For menu open and close
$("#cb").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

// For menu open and close
$("#b").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

// For menu open and close
$("#d").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

// For menu open and close
$("#e").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

// For menu open and close
$("#f").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

// For menu open and close
$("#g").click(function (e) {
  // e.preventDefault();
  $("#active").click(function (e) {
    e.stopPropagation();
  });
  $("#active").prop("checked", !$("#active").prop("checked"));
});

document.querySelector("#about").innerHTML = `

<div class="abTitle">About</div>

<div class="contain">




<div class="column-1">

<div class="name">James De Koven PIERRE
<span>Web Developer-Programmer-Junior Designer-Business Manager</span>
</div>

   <p class="bref">Holder of a diploma in management and a degree in computer science from <a href="https://www.esih.edu/"  target="_blank"  rel="noopener noreferrer "  >ESIH</a> , I am
                        passionate about technology especially in Web development, designing, 3d and VR/AR I am always
                        eager for new knowledge and I adapt quickly</p>


                        <a href="" class="aboutCTA">Dowload my resume  &nbsp; <ion-icon   class="aboutCTAIcon" name="cloud-download-outline"></ion-icon></a>

</div>



<div  class="column-1 pic" >
<img  class="me" src="${me}"  />

</div>

</div>





`;

document.querySelector("#skills").innerHTML = `

<div class="skTitle">Skills</div>


<div class="parent">
<div class="div1  skills_item">  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"  target="_blank"   rel="noreferrer noopener" > <img class="logo_size hvr-grow  " src="${html_logo}"       /> </a> </div>
<div class="div2  skills_item">   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size  hvr-grow " src="${css_logo}"     />   </a>  </div>
<div class="div3  skills_item">   <a href="https://www.php.net/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size  hvr-grow " src="${php_logo}"     />  </a>   </div>
<div class="div4  skills_item">   <a href="https://www.javascript.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${js_logo}"     />   </a>  </div>
<div class="div5  skills_item">   <a href="https://getbootstrap.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${bootstrap_logo}"     />   </a>  </div>
<div class="div6  skills_item">   <a href="https://wordpress.org/"  target="_blank"   rel="noreferrer noopener" >  <img  class="logo_size3 hvr-grow " src="${wordpress_logo}"     /> </a>   </div>
<div class="div7  skills_item">   <a href="https://laravel.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${laravel_logo}"     />  </a>   </div>
<div class="div8  skills_item">   <a href="https://angular.io/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size2 hvr-grow " src="${angular_logo}"     />   </a>  </div>
</div>

  


`;

// -----------------------------------------------------------

document.querySelector("#project").innerHTML = `


<div class="proTitle">Project</div>

<div class="slider">
    <div class="slider__slide slider__slide--active" data-slide="1">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
                <h1><a class="alink_dark" href="#" >ebnhaïti.org </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__slide" data-slide="2">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
                <h1><a class="alink_light" href="#" >hustero.com </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__slide" data-slide="3">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
         <h1><a class="alink_dark" href="#" >inufocad.edu </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__indicators"></div>

    












`;

$(document).ready(function () {
  for (var i = 1; i <= $(".slider__slide").length; i++) {
    $(".slider__indicators").append(
      '<div class="slider__indicator" data-slide="' + i + '"></div>'
    );
  }
  setTimeout(function () {
    $(".slider__wrap").addClass("slider__wrap--hacked");
  }, 1000);
});

function goToSlide(number) {
  $(".slider__slide").removeClass("slider__slide--active");
  $(".slider__slide[data-slide=" + number + "]").addClass(
    "slider__slide--active"
  );
}

$(".slider__next, .go-to-next").on("click", function () {
  var currentSlide = Number($(".slider__slide--active").data("slide"));
  var totalSlides = $(".slider__slide").length;
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  goToSlide(currentSlide);
});

// -----------------------

document.querySelector("#Achievements").innerHTML = `

<div class="achTitle">Achievements</div>

<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
   
  
  
  <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Hustero</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    
    


    
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
     <!--   <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Zentoupatou</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    
  
  
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    


    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    

  
  
    </div>
  <div class="blog-slider__pagination"></div>
</div>

`;

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

document.querySelector("footer").innerHTML = `

<div class="footer_social">

<ul class="footer_social_item">
<li><a href="mailto:jamesdekoven43@gmail.com" rel="noopenenr noreferrer" ><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
<li><a href="https://github.com/Dekoven97"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
<li><a href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li><a href="https://twitter.com/DeKoven97"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li><a href="https://www.facebook.com/pierre.jamesdekoven"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li><a href="https://www.instagram.com/de_koven/"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>

</ul>



</div>

<div class="tag"  >


<div class="ecopy">&copy; <span id="ecopy"></span/> DeKoven</div>





</div>





`;

document.getElementById("ecopy").innerHTML = new Date().getFullYear();

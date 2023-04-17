// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("new");
};
window.addEventListener("click", function (e) {
  if (e.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("new");
  }
});

// menu end
const navMenu = document.getElementById("navMenu");
// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
    header.classList.add("active");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("active");
    if (navMenu.classList.contains("active")) {
      header.classList.add("active");
    }
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

if (navMenu) {
  const navMenuBtn = document.getElementById("navMenuBtn");
  const headerMenu = document.getElementById("headerMenu");

  navMenuBtn.onclick = () => {
    navMenuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.add("active");
    body.classList.toggle("active");
    headerMenu.classList.toggle("active");

    if (header.classList.contains("sticky")) {
      header.classList.add("active");
    }
    if (window.innerWidth < 1024) {
      body.classList.add("active");
      header.classList.add("active");
    }
  };
  window.onclick = function (event) {
    if (event.target == headerMenu) {
      navMenuBtn.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("active");
      header.classList.remove("active");
      headerMenu.classList.remove("active");
      if (header.classList.contains("sticky")) {
        header.classList.add("active");
      }
    }
  };
}

// sliders
var $status = $(".pagingInfo");
$(".rooms__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    fade: false,
    centerMode: true,
    speed: 1100,
  });
});

$(".stay__inner-row").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});

$(".news__inner-row").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});

let dropdownBtns = document.querySelectorAll(".navMenu__item-btn");
let accordionTabs = document.querySelectorAll(".navMenu__item-dropdown");

dropdownBtns.forEach((btn) => {
  btn.onclick = () => {
    let parentNode = btn.parentElement;
    let dropdownContent = parentNode.querySelector(".navMenu__item-dropdown");

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      dropdownContent.classList.remove("active");
    } else {
      btn.classList.add("active");
      dropdownContent.classList.add("active");
    }
  };
});

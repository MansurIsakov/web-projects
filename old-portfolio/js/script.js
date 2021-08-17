"use strict";

// //  NAVBAR MENU
const menu = document.querySelector(".navigation__hamburger-menu");
const line1 = document.querySelector(".line-1");
const line3 = document.querySelector(".line-3");
const navContent = document.querySelector(".nav-main__content");
const navLink = document.querySelectorAll(".list__link");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  navContent.classList.toggle("change");
  line1.classList.toggle("change");
  line3.classList.toggle("change");
  body.classList.toggle("noScroll");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navContent.classList.remove("change");
    line1.classList.remove("change");
    line3.classList.remove("change");
    body.classList.remove("noScroll");
  });
});

// TABS DESKTOP
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".skills__filter");
const tabsContent = document.querySelectorAll(".skills__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("active"));
  tabsContent.forEach((c) => c.classList.remove("skills__content--active"));

  // Activate tab
  clicked.classList.add("active");

  // Activate content area
  // console.log(clicked);
  document
    .querySelector(`.skills__content--${clicked.dataset.tab}`)
    .classList.add("skills__content--active");
});

// TAB TABLETS & PHONE
const tabsTablet = document.querySelectorAll(".operations__tab");
const tabsContainerTablet = document.querySelector(".skills__filter");
const tabsContentTablet = document.querySelectorAll(".skills__content--tablet");

tabsContainerTablet.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabsTablet.forEach((t) => t.classList.remove("active"));
  tabsContentTablet.forEach((c) =>
    c.classList.remove("skills__content--tablet--active")
  );

  // Activate tab
  clicked.classList.add("active");

  // Activate content area
  // console.log(clicked);
  document
    .querySelector(`.skills__content--tablet--${clicked.dataset.tab}`)
    .classList.add("skills__content--tablet--active");
});

// TEAM
const otherTeam = document.querySelectorAll(".other-team");
const otherTeamContainer = document.querySelector(".team-member__others");
const slide = document.querySelectorAll(".team-member");

otherTeamContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".other-team");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  otherTeam.forEach((t) => t.classList.remove("active"));
  slide.forEach((c) => c.classList.remove("team-member--active"));

  // Activate tab
  clicked.classList.add("active");

  // Activate content area
  // console.log(clicked);
  document
    .querySelector(`.team-member--${clicked.dataset.team}`)
    .classList.add("team-member--active");
});

// LOADER
window.onload = () => {
  document.querySelector("body").classList.add("noScroll");
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
    document.querySelector("body").classList.remove("noScroll");
  }, 5000);
};

// CLEANING ID LINK
//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function (elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if (elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function (ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  }
});

// Scroll effect
const section = document.querySelector("body");

let currentPos = window.pageYOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.1;

  section.style.transform = `skewY(${speed}deg)`;

  currentPos = newPos;

  requestAnimationFrame(update);
};

update();

// MOVING TO TOP ON RELOADING WEBSITE
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// open all social links in new tab
let socialLinks = document.querySelectorAll(".social-links--box a");
socialLinks.forEach((link) => {
  link.target = "_blank";
});

// custom cursor
const cursor = document.querySelector(".cursor");
window.onmousemove = (e) => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY + -13}px; left: ${e.pageX + 3}px; z-index: 20000;`
  );
};

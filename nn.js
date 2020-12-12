"use strict";

//Pharentasis for menu items
const navListElements = document.querySelectorAll(".menu-item");
navListElements.forEach((e) => (e.textContent = `( ${e.textContent} )`));

//Photos for slider
for (let x = 1; x < 4; x++) {
  document.querySelector(
    `#img${x}`
  ).style.backgroundImage = `url(img/pic${x}.jpg)`;
}

//Scrolling
for (let x = 1; x < 6; x++) {
  const menuItem = document.querySelector(`#menu${x}`);
  document.querySelector(`#menu${x}`).addEventListener("click", function (e) {
    document.querySelector(`#inter${x}`).scrollIntoView({ behavior: "smooth" });
  });
}

//Animation of lines after scrolling
const lines = document.querySelectorAll(".line");
const circles = document.querySelectorAll(".circle");
lines.forEach((l) => l.classList.add("hidden"));
circles.forEach((c) => c.classList.add("hidden"));

const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    circles.forEach((c) => {
      c.style.animation = "animate-ball 4s";
      c.classList.remove("hidden");
    });
    lines.forEach((l) => {
      l.style.animation = "display-line 4s";
      l.classList.remove("hidden");
    });
  }
};
const obsOptions = {
  root: null,
  threshold: 0.2,
};
const intersectionObserver = new IntersectionObserver(obsCallback, obsOptions);
intersectionObserver.observe(document.querySelector("#section2"));

//chart animations
const chart = document.querySelectorAll(".outline");
for (let x = 1; x < 5; x++) {
  chart.forEach((ch) => ch.classList.add("hidden-chart"));
}
const obsChart = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    for (let x = 1; x < 5; x++) {
      chart.forEach((ch) => ch.classList.remove("hidden-chart"));
    }
    const outline1 = document.querySelector("#outline1");
    const outline2 = document.querySelector("#outline2");
    const outline3 = document.querySelector("#outline3");
    const outline4 = document.querySelector("#outline4");
    outline1.style.animation = "show95 2s forwards";
    outline2.style.animation = "show50 2s forwards";
    outline3.style.animation = "show25 2s forwards";
    outline4.style.animation = "show100 2s forwards";
  }
};

const chartOptions = {
  root: null,
  threshold: 0.5,
};

const chartObserver = new IntersectionObserver(obsChart, chartOptions);

chartObserver.observe(document.querySelector("#section4"));

//Tabs
document.querySelector("#slide1").classList.add("active");
document.querySelector("#tab1").classList.add("selected");

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const tabList = document.querySelector(".tab-list");
const tabs = document.querySelectorAll(".tab");

tabList.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab");

  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("selected"));

  clicked.classList.add("selected");
  slides.forEach((t) => t.classList.remove("active"));
  document
    .querySelector(`#slide${clicked.dataset.tab}`)
    .classList.add("active");
});

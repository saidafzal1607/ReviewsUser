"use strict";

// local reviews data 
var reviews = [{
  id: 1,
  name: 'susan smith',
  job: 'web developer',
  img: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  text: "I'm baby  twee health got +1. Bicycle rights coloring Lorem book salvia hoodie, cold-presed four dollar toast everyday carry"
}, {
  id: 2,
  name: "anna johnson",
  job: 'web designer',
  img: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  text: " adipisicing elit. Incidunt, cupiditate fugiat nam voluptatem minima odit non quibusdam sapiente omnis dolore."
}, {
  id: 3,
  name: 'peter johnson',
  job: 'you tuber',
  img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis alias dignissimos aperiam magnam iure qui laborum impedit!"
}, {
  id: 4,
  name: "Simon",
  job: 'front-end developer',
  img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  text: "Simon ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis alias dignissimos aperiam magnam iure "
}];
var currentItem = 0;
var img = document.getElementById('person-img');
var author = document.getElementById('author');
var job = document.getElementById('job');
var info = document.getElementById('info');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var randomBtn = document.querySelector('.random-btn');
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

function showPerson() {
  var item = reviews[currentItem];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson();
});
prevBtn.addEventListener('click', function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson();
});
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
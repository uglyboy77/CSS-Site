function showContent(group) {
  const selectedGroup = document.getElementById(group);
  if (selectedGroup.classList.contains('hidden')) {
    const allGroups = document.querySelectorAll('.hidden');
    allGroups.forEach((content) => {
      content.classList.add('hidden');
    });
    
    selectedGroup.classList.remove('hidden');
  } else {
    
    selectedGroup.classList.add('hidden');
  }
}
  let currentSlide = 0;
const slides = document.querySelectorAll('.image2');
const slider = document.querySelector('.imager');
function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  const offset = -currentSlide * 420; 
  slider.style.transform = `translateX(${offset}px)`;
}
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '☼'; 
  } else {
    themeIcon.textContent = '☽';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☼'; 
  } else {
    themeIcon.textContent = '☽'; 
  }
});
function toggledown() {
  const dropmenu = document.getElementById('drop');
  dropmenu.classList.toggle('show');
}
function toggledown() {
  const dropmenu = document.getElementById('drop');
  if (dropmenu) {
    dropmenu.classList.toggle('show');
  }
  const mainImage = document.getElementById('main-image');
if (dropmenu.classList.contains('show')) {
  mainImage.src = "IMG_6817.png"; 
  mainImage.style.display='block';
}
else{
  mainImage.src="IMG_5524.png";
  mainImage.style.display='block';
}
}
  function updateClock() {
    const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }
    setInterval(updateClock, 1000);
        updateClock(); 
const counter = document.getElementById('counter');
const targetNumber = 3000;
const duration = 100000;
const increment = targetNumber / (duration / 16);
let currentCount = 0;
function updateCounter() {
  currentCount += increment;

  if (currentCount >= targetNumber) {
    currentCount = targetNumber;
    counter.textContent = Math.floor(currentCount); 
    return;
  }
  counter.textContent = Math.floor(currentCount);
  requestAnimationFrame(updateCounter);
}
updateCounter();
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carousel.children.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}


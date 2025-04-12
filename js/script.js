const toggler = document.querySelector(".navbar__toggler");
const navbar = document.querySelector(".navbar");
const productsList = document.getElementById('productsList');

const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const productList = document.querySelector('.products__list');
const dotsContainer = document.getElementById('carouselDots');


let currentIndex = 0;

toggler.addEventListener("click", () => {
  navbar.classList.toggle("navbar--expanded");
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > window.innerHeight * 0.1) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});
  

let autoplayInterval;

const products = [
  { image: '/assets/images/bathrust-1.png', price: '$39.95', alt: 'Bathrust Magazine' },
  { image: '/assets/images/bathrust-1.png', price: '$39.95', alt: 'Bathrust Magazine' },
  { image: '/assets/images/bathrust-1.png', price: '$39.95', alt: 'Bathrust Magazine' },
  { image: '/assets/images/bathrust-1.png', price: '$29.95', alt: 'Bathrust Magazine' },
  { image: '/assets/images/bathrust-1.png', price: '$49.95', alt: 'Bathrust Magazine' },
];

// Create product items
products.forEach(product => {
  const productItem = document.createElement('div');
  productItem.className = 'product';
  productItem.innerHTML = `
    <img src="${product.image}" alt="${product.alt}" class="product__image"/>
    <p class="product__price">${product.price}</p>
    <button class="btn btn--primary">Subscribe Now</button>
  `;
  productsList.appendChild(productItem);
});

// Dots
function createDots() {
  for (let i = 0; i < products.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel__dot');
    if (i === 0) dot.classList.add('carousel__dot--active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider(currentIndex);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  }
}

// Update active dot and slide
function updateSlider(index) {
  const slideWidth = document.querySelector('.product').offsetWidth + 16;
  productsList.style.transform = `translateX(-${slideWidth * index}px)`;

  document.querySelectorAll('.carousel__dot').forEach((dot, i) => {
    dot.classList.toggle('carousel__dot--active', i === index);
  });
}

// Navigation
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  updateSlider(currentIndex);
  resetAutoplay();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % products.length;
  updateSlider(currentIndex);
  resetAutoplay();
});

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % products.length;
    updateSlider(currentIndex);
  }, 3000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Init
window.addEventListener('load', () => {
  createDots();
  updateSlider(currentIndex);
  startAutoplay();
});

window.addEventListener('resize', () => {
  updateSlider(currentIndex);
});


const toggler = document.querySelector(".navbar__toggler");
const productsList = document.getElementById('productsList');
const navbar = document.querySelector(".navbar");

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
  
document.addEventListener('DOMContentLoaded', () => {
  
  const products = [
    { id:1, image: '/assets/images/product-1.png', price: '$39.95', alt: 'Product 1' },
    { id:2, image: '/assets/images/product-2.webp', price: '$39.95', alt: 'Product 2' },
    { id:3, image: '/assets/images/product-3.png', price: '$39.95', alt: 'Product 3' },
  ]

  products.forEach(product => {
    const productItem = document.createElement('figure');
    productItem.classList.add('product');
    productItem.innerHTML = `
        <div class="product__image-container">
            <img src="${product.image}" alt="${product.alt}" class="product__image"/>
            <div class="product__overlay">
                <a href="/" class="btn btn--primary product__button">${product.alt} details</a>
            </div>
        </div>
        <figcaption class="product__caption">
            <p class="product__price">${product.price}</p>
            <button class="btn btn--block btn--primary">Subscribe Now</button>
        </figcaption>
    `;
    productsList.appendChild(productItem);
  });
  
});
  
  
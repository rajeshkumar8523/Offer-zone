// Enable mobile menu toggle safely
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// FIXED SLIDER SCRIPT
let slides = document.querySelectorAll(".fade-slide");
let index = 0;

let sliderInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// Pause on hover
slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => clearInterval(sliderInterval));
  slide.addEventListener("mouseleave", () => {
    sliderInterval = setInterval(nextSlide, 4000);
  });
});

function toggleLike(btn) {
  btn.classList.toggle("liked");

  const card = btn.closest(".product-card");

  const product = {
    id: card.dataset.id,
    name: card.dataset.name,
    price: card.dataset.price,
    img: card.dataset.img,
  };

  let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];

  if (btn.classList.contains("liked")) {
    // ADD product to liked list
    liked.push(product);
  } else {
    // REMOVE product
    liked = liked.filter((p) => p.id !== product.id);
  }

  localStorage.setItem("likedProducts", JSON.stringify(liked));
}

// ---------- ADD TO CART ----------
document.querySelectorAll(".add-cart-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const card = this.closest(".product-card");

    const product = {
      id: Number(card.dataset.id), // ✅ REAL PRODUCT ID
      name: card.dataset.name,
      price: Number(card.dataset.price),
      img: card.dataset.img,
      qty: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Product added to cart");
  });
});
function getAverageRating(p) {
  if (p.reviews && p.reviews.length > 0) {
    return (
      p.reviews.reduce((sum, r) => sum + r.rating, 0) / p.reviews.length
    ).toFixed(1);
  }
  return p.rating || "0.0";
}
/* ---------------- FILTER SCRIPT ---------------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active button styling
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter; // selected category

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (category === "all" || category === cardCategory) {
        card.style.display = "block"; // show matching cards
      } else {
        card.style.display = "none"; // hide others
      }
    });
  });
});

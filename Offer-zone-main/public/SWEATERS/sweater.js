// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

// Like button functionality
function toggleLike(button) {
  button.classList.toggle("liked");
  const icon = button.querySelector("i");
  if (button.classList.contains("liked")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter products
      productCards.forEach((card) => {
        const cardFilter = card.getAttribute("data-filter");

        if (filterValue === "all" || cardFilter === filterValue) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.9)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 300);
        }
      });
    });
  });

  // Initialize all products as visible
  productCards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
  });
});

// Add to cart functionality
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("add-cart-btn") ||
    e.target.closest(".add-cart-btn")
  ) {
    const button = e.target.classList.contains("add-cart-btn")
      ? e.target
      : e.target.closest(".add-cart-btn");
    const card = button.closest(".product-card");
    const productId = card.getAttribute("data-id");
    const productName = card.getAttribute("data-name");
    const productPrice = card.getAttribute("data-price");

    // Create a simple notification
    const notification = document.createElement("div");
    notification.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300";
    notification.textContent = `Added ${productName} to cart!`;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);

    // You can add actual cart logic here
    console.log(
      `Added to cart: ${productName} (ID: ${productId}) - ₹${productPrice}`
    );
  }
});
    // ---------- ADD TO CART ----------
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const card = this.closest(".product-card");

        const product = {
          id: Number(card.dataset.id),      // ✅ REAL PRODUCT ID
          name: card.dataset.name,
          price: Number(card.dataset.price),
          img: card.dataset.img,
          qty: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.id === product.id);

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
          p.reviews.reduce((sum, r) => sum + r.rating, 0) /
          p.reviews.length
        ).toFixed(1);
      }
      return p.rating || "0.0";
    }
// Sample product data for search
const searchProducts = [
  {
    id: 1,
    name: "Gas Safety Device",
    category: "Home & Safety",
    price: "₹1,499",
    link: "./gas.html",
  },
  {
    id: 2,
    name: "Men's Formal Shirt",
    category: "Clothing",
    price: "₹899",
    link: "./men.html",
  },
  {
    id: 3,
    name: "Silk Saree",
    category: "Clothing",
    price: "₹2,999",
    link: "./sares.html",
  },
  {
    id: 4,
    name: "Gold Necklace",
    category: "Jewellery",
    price: "₹24,999",
    link: "./GOLD/gold.html",
  },
  {
    id: 5,
    name: "Track Pants",
    category: "Clothing",
    price: "₹799",
    link: "./TRACKPANTS/trackp.html",
  },
  {
    id: 6,
    name: "Cotton Shirt Fabric",
    category: "Materials",
    price: "₹299/m",
    link: "./SHIRTSHOOT/shirtshoot.html",
  },
  {
    id: 7,
    name: "Woolen Sweater",
    category: "Clothing",
    price: "₹1,299",
    link: "./SWEATERS/sweater.html",
  },
  {
    id: 8,
    name: "Kids T-Shirt",
    category: "Clothing",
    price: "₹499",
    link: "./kid.html",
  },
  {
    id: 9,
    name: "Ladies Kurti",
    category: "Clothing",
    price: "₹899",
    link: "./leadies.html",
  },
  {
    id: 10,
    name: "Combo Pack 1",
    category: "Home & Safety",
    price: "₹2,999",
    link: "./combo1.html",
  },
];

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Mobile search toggle
document
  .getElementById("mobileSearchToggle")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("mobileSearchBar");
    searchBar.classList.toggle("hidden");
    if (!searchBar.classList.contains("hidden")) {
      document.getElementById("mobileSearchInput").focus();
    }
  });

// Close mobile search
document
  .getElementById("closeMobileSearch")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("mobileSearchBar");
    searchBar.classList.add("hidden");
    hideSearchResults("mobile");
  });

// Close menu when clicking on a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

// Search functionality
function performSearch(query, searchType) {
  if (!query.trim()) {
    hideSearchResults(searchType);
    return;
  }

  const searchTerm = query.toLowerCase();
  const results = searchProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );

  displaySearchResults(results, searchType);
}

function displaySearchResults(results, searchType) {
  const resultsContainer = document.getElementById(
    `${searchType}SearchResults`
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `
        <div class="p-4 text-center text-gray-500">
          <i class="fa-solid fa-search mb-2 text-2xl"></i>
          <p>No products found</p>
          <p class="text-sm mt-1">Try different keywords</p>
        </div>
      `;
  } else {
    let html = "";
    results.forEach((product) => {
      html += `
          <a href="${product.link}" class="block p-4 hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-medium text-gray-800">${product.name}</h4>
                <p class="text-sm text-gray-500 mt-1">${product.category}</p>
              </div>
              <span class="font-semibold text-orange-600">${product.price}</span>
            </div>
          </a>
        `;
    });

    // Add view all results link
    html += `
        <div class="p-3 bg-gray-50 border-t border-gray-100">
          <a href="#" class="block text-center text-orange-600 font-medium hover:text-orange-700">
            View all ${results.length} results
          </a>
        </div>
      `;

    resultsContainer.innerHTML = html;
  }

  resultsContainer.classList.remove("hidden");
}

function hideSearchResults(searchType) {
  const resultsContainer = document.getElementById(
    `${searchType}SearchResults`
  );
  resultsContainer.classList.add("hidden");
}

// Desktop search
const desktopSearchInput = document.getElementById("desktopSearchInput");
if (desktopSearchInput) {
  desktopSearchInput.addEventListener("input", function (e) {
    performSearch(e.target.value, "desktop");
  });

  desktopSearchInput.addEventListener("focus", function () {
    if (this.value.trim()) {
      performSearch(this.value, "desktop");
    }
  });

  // Hide results when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !desktopSearchInput.contains(e.target) &&
      !document.getElementById("desktopSearchResults").contains(e.target)
    ) {
      hideSearchResults("desktop");
    }
  });
}

// Mobile search
const mobileSearchInput = document.getElementById("mobileSearchInput");
if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", function (e) {
    performSearch(e.target.value, "mobile");
  });

  mobileSearchInput.addEventListener("focus", function () {
    if (this.value.trim()) {
      performSearch(this.value, "mobile");
    }
  });

  // Hide results when clicking outside (for mobile)
  document.addEventListener("click", function (e) {
    const mobileSearchBar = document.getElementById("mobileSearchBar");
    const mobileResults = document.getElementById("mobileSearchResults");
    if (
      !mobileSearchBar.contains(e.target) &&
      !mobileResults.contains(e.target)
    ) {
      hideSearchResults("mobile");
    }
  });
}

// Handle Enter key press for search
function handleSearchEnter(e, searchType) {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    // Redirect to search results page with query
    window.location.href = `./search.html?q=${encodeURIComponent(
      e.target.value
    )}`;
  }
}

if (desktopSearchInput) {
  desktopSearchInput.addEventListener("keypress", (e) =>
    handleSearchEnter(e, "desktop")
  );
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("keypress", (e) =>
    handleSearchEnter(e, "mobile")
  );
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


///  BUY

function buyNow(btn) {
  const card = btn.closest(".product-card");

  /* ---------- IMAGE (FIXED) ---------- */
  const imgEl = card.querySelector(".product-img");
  const imgSrc = imgEl ? imgEl.getAttribute("src") : "";
  const image = imgSrc.split("/").pop(); // g1-1.jpeg

  /* ---------- NAME ---------- */
  const name = card.getAttribute("data-name");

  /* ---------- CATEGORY ---------- */
  const category =
    card.querySelector("p.text-slate-500")?.innerText || "";

  /* ---------- PRICE ---------- */
  const priceText =
    card.querySelector("p.text-orange-600")?.innerText || "0";
  const price = parseInt(priceText.replace(/[₹,]/g, ""));

  /* ---------- ORIGINAL PRICE (FAKE FOR DISCOUNT) ---------- */
  const originalPrice = Math.round(price * 1.25);

  /* ---------- RATING (FIXED) ---------- */
  const ratingText =
    card.querySelector(".stars span")?.innerText || "0";
  const rating = parseFloat(ratingText);

  /* ---------- DESCRIPTION ---------- */
  const description =
    card.querySelector("p.text-slate-600")?.innerText || "";

  /* ---------- SAVE ---------- */
  localStorage.setItem(
    "buyProduct",
    JSON.stringify({
      name,
      category,
      price,
      originalPrice,
      image,
      rating,
      description
    })
  );

  /* ---------- REDIRECT ---------- */
  window.location.href = "../buy.html";
}
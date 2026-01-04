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




const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="text-gray-500 text-center">Your cart is empty 🛒</p>`;
    cartTotalEl.innerText = "₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    cartItemsEl.innerHTML += `
      <div 
        class="bg-white rounded-xl shadow p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-50"
        onclick="openProduct(${item.id})"
      >

        <img src="${item.img}" class="w-24 h-24 object-cover rounded" />

        <div class="flex-1">
          <h4 class="font-bold text-lg">${item.name}</h4>
          <p class="text-orange-600 font-semibold">₹${item.price}</p>

          <div class="flex items-center gap-3 mt-3">
            <button onclick="event.stopPropagation(); changeQty(${index}, -1)"
              class="w-8 h-8 rounded-full border font-bold">−</button>

            <span class="font-semibold">${item.qty}</span>

            <button onclick="event.stopPropagation(); changeQty(${index}, 1)"
              class="w-8 h-8 rounded-full border font-bold">+</button>
          </div>
        </div>

        <div class="text-right">
          <p class="font-bold">₹${itemTotal}</p>
          <button onclick="event.stopPropagation(); removeItem(${index})"
            class="text-red-500 text-sm mt-2 hover:underline">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  cartTotalEl.innerText = `₹${total}`;
}

function openProduct(productId) {
  // ✅ CORRECT PATH
  window.location.href = `../PRODUCTS/product.html?id=${productId}`;
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();

// Enable mobile menu toggle safely
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

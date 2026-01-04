// Sample product data for search
const searchProducts = [
  {
    id: 1,
    name: "Gas Safety Device",
    category: "Home & Safety",
    price: "₹1,499",
    link: "./gas.html",
  },
  // ... other products
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
document.getElementById("mobileSearchToggle")?.addEventListener("click", function () {
  const searchBar = document.getElementById("mobileSearchBar");
  searchBar.classList.toggle("hidden");
  if (!searchBar.classList.contains("hidden")) {
    document.getElementById("mobileSearchInput").focus();
  }
});

// Close mobile search
document.getElementById("closeMobileSearch")?.addEventListener("click", function () {
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
  const resultsContainer = document.getElementById(`${searchType}SearchResults`);

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
  const resultsContainer = document.getElementById(`${searchType}SearchResults`);
  resultsContainer?.classList.add("hidden");
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
      desktopSearchInput &&
      !desktopSearchInput.contains(e.target) &&
      document.getElementById("desktopSearchResults") &&
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
}

// Handle Enter key press for search
function handleSearchEnter(e, searchType) {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    window.location.href = `./search.html?q=${encodeURIComponent(e.target.value)}`;
  }
}

if (desktopSearchInput) {
  desktopSearchInput.addEventListener("keypress", (e) => handleSearchEnter(e, "desktop"));
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("keypress", (e) => handleSearchEnter(e, "mobile"));
}

// ================== LIKED PRODUCTS FUNCTIONALITY ==================

// Define the renderProductCard function first
function renderProductCard(product) {
  const rating = getAverageRating(product);
  const reviews = getReviewCount(product);

  return `
    <article class="bg-white product-card shadow-sm p-4 cursor-pointer" 
             data-id="${product.id}"
             data-name="${product.name}"
             data-price="${product.price}"
             data-img="${product.images ? product.images[0] : product.img}">

      <!-- IMAGE -->
      <div class="img-wrap rounded-lg">
        <div class="like-btn liked" onclick="event.stopPropagation(); toggleLike(this, ${product.id})">
          <i class="fa-solid fa-heart"></i>
        </div>

        <!-- IMAGE CLICKABLE -->
        <a href="../PRODUCTS/product.html?id=${product.id}" onclick="event.stopPropagation()">
          <img src="${product.images ? product.images[0] : product.img}" 
               alt="${product.name}" 
               class="product-img">
        </a>
      </div>

      <!-- CONTENT -->
      <div class="mt-4">
        <p class="text-sm text-slate-500">${product.category || 'Product'}</p>

        <!-- TITLE CLICKABLE -->
        <a href="../PRODUCTS/product.html?id=${product.id}" onclick="event.stopPropagation()">
          <h4 class="text-lg font-bold truncate-2 hover:text-orange-500">
            ${product.name}
          </h4>
        </a>

        <p class="text-sm text-slate-600 truncate-2">
          ${product.description || 'No description available'}
        </p>

        <!-- RATINGS -->
        <div class="flex items-center gap-2 stars mt-2">
          <span class="text-sm font-semibold">${rating}</span>
          ${renderStars(rating)}
          <span class="text-xs text-gray-400">(${reviews})</span>
        </div>

        <!-- PRICE -->
        <div class="flex items-center gap-2 mt-2">
          <p class="text-2xl font-extrabold text-orange-600">₹${typeof product.price === 'number' ? product.price.toLocaleString() : product.price}</p>
          ${product.oldPrice ? `
            <p class="text-sm text-gray-400 line-through">₹${product.oldPrice.toLocaleString()}</p>
            <span class="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
              ${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% off
            </span>
          ` : ''}
        </div>
      </div>

      <!-- BUTTONS -->
      <div class="flex gap-3 mt-3">
        <!-- BUY BUTTON -->
        <a href="./buy.html" onclick="event.stopPropagation()"
          class="btn-orange px-4 py-2 rounded-full text-center w-1/2 text-sm font-semibold">
          Buy
        </a>

        <!-- ADD TO CART BUTTON -->
        <button class="add-cart-btn btn-outline px-4 py-2 rounded-full w-1/2 text-sm font-semibold"
          onclick="event.stopPropagation(); addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

// Helper functions
function getAverageRating(product) {
  if (product.reviews && product.reviews.length > 0) {
    const avg = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
    return avg.toFixed(1);
  }
  return product.rating || "4.0";
}

function getReviewCount(product) {
  if (product.reviews && product.reviews.length > 0) {
    return product.reviews.length;
  }
  return product.reviewsCount || Math.floor(Math.random() * 200) + 50;
}

function renderStars(rating) {
  let stars = '';
  const numRating = parseFloat(rating);
  const fullStars = Math.floor(numRating);
  const hasHalfStar = numRating % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += '<i class="fa-solid fa-star text-yellow-400"></i>';
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars += '<i class="fa-solid fa-star-half-stroke text-yellow-400"></i>';
    } else {
      stars += '<i class="fa-regular fa-star text-yellow-400"></i>';
    }
  }
  return stars;
}

function getFullProductData(productId) {
  // Check if allProducts exists globally
  if (window.allProducts) {
    return window.allProducts.find(p => p.id == productId);
  }
  
  // Check localStorage
  const storedProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
  return storedProducts.find(p => p.id == productId) || null;
}

// Toggle like function
function toggleLike(element, productId) {
  const isLiked = element.classList.contains('liked');
  const icon = element.querySelector('i');
  
  if (isLiked) {
    element.classList.remove('liked');
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    removeFromLiked(productId);
  } else {
    element.classList.add('liked');
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    addToLiked(productId);
  }
}

function addToLiked(productId) {
  const product = getFullProductData(productId);
  if (!product) return;
  
  const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
  
  if (!likedProducts.some(p => p.id === productId)) {
    likedProducts.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.images ? product.images[0] : product.img,
      category: product.category
    });
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }
}

function removeFromLiked(productId) {
  let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
  likedProducts = likedProducts.filter(p => p.id != productId);
  localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  
  // Refresh liked products display if on liked page
  if (document.getElementById("likedContainer")) {
    loadLikedProducts();
  }
}

// Add to cart function
function addToCart(productId) {
  const product = getFullProductData(productId);
  if (!product) return;
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.images ? product.images[0] : product.img,
      quantity: 1
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Show notification
  showNotification(`${product.name} added to cart!`);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slideUp';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.add('animate-slideDown');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Load liked products
function loadLikedProducts() {
  const container = document.getElementById("likedContainer");
  if (!container) return;
  
  const liked = JSON.parse(localStorage.getItem("likedProducts")) || [];

  if (liked.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fa-regular fa-heart text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">No liked products yet</h3>
        <p class="text-gray-500 mb-6">Start browsing and click the heart icon to add products here!</p>
        <a href="./index.html" class="btn-orange inline-block px-6 py-3 rounded-full">
          Browse Products
        </a>
      </div>`;
  } else {
    container.innerHTML = '';
    
    // Load all products data first
    const allProducts = window.allProducts || JSON.parse(localStorage.getItem('allProducts')) || [];
    
    liked.forEach(likedProduct => {
      const fullProduct = allProducts.find(p => p.id == likedProduct.id) || likedProduct;
      container.innerHTML += renderProductCard(fullProduct);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load liked products if on liked page
  if (document.getElementById("likedContainer")) {
    loadLikedProducts();
  }
  
  // Initialize all like buttons on page
  document.querySelectorAll('.like-btn').forEach(btn => {
    const productId = btn.closest('[data-id]')?.getAttribute('data-id');
    if (productId) {
      const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
      if (likedProducts.some(p => p.id == productId)) {
        btn.classList.add('liked');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
        }
      }
    }
  });
});
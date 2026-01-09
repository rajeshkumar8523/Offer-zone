    // Sample product data for search
    const searchProducts = [
      { id: 1, name: "Gas Safety Device", category: "Home & Safety", price: "₹1,499", link: "./gas.html" },
      { id: 2, name: "Men's Formal Shirt", category: "Clothing", price: "₹899", link: "./men.html" },
      { id: 3, name: "Silk Saree", category: "Clothing", price: "₹2,999", link: "./sares.html" },
      { id: 4, name: "Gold Necklace", category: "Jewellery", price: "₹24,999", link: "./GOLD/gold.html" },
      { id: 5, name: "Track Pants", category: "Clothing", price: "₹799", link: "./TRACKPANTS/trackp.html" },
      { id: 6, name: "Cotton Shirt Fabric", category: "Materials", price: "₹299/m", link: "./SHIRTSHOOT/shirtshoot.html" },
      { id: 7, name: "Woolen Sweater", category: "Clothing", price: "₹1,299", link: "./SWEATERS/sweater.html" },
      { id: 8, name: "Kids T-Shirt", category: "Clothing", price: "₹499", link: "./kid.html" },
      { id: 9, name: "Ladies Kurti", category: "Clothing", price: "₹899", link: "./leadies.html" },
      { id: 10, name: "Combo Pack 1", category: "Home & Safety", price: "₹2,999", link: "./combo1.html" }
    ];

    // Toggle mobile menu
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      const overlay = document.getElementById('mobileOverlay');
      if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    // Mobile search toggle
    document.getElementById('mobileSearchToggle').addEventListener('click', function () {
      const searchBar = document.getElementById('mobileSearchBar');
      searchBar.classList.toggle('hidden');
      if (!searchBar.classList.contains('hidden')) {
        document.getElementById('mobileSearchInput').focus();
      }
    });

    // Close mobile search
    document.getElementById('closeMobileSearch').addEventListener('click', function () {
      const searchBar = document.getElementById('mobileSearchBar');
      searchBar.classList.add('hidden');
      hideSearchResults('mobile');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
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
      const results = searchProducts.filter(product =>
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
        let html = '';
        results.forEach(product => {
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

      resultsContainer.classList.remove('hidden');
    }

    function hideSearchResults(searchType) {
      const resultsContainer = document.getElementById(`${searchType}SearchResults`);
      resultsContainer.classList.add('hidden');
    }

    // Desktop search
    const desktopSearchInput = document.getElementById('desktopSearchInput');
    if (desktopSearchInput) {
      desktopSearchInput.addEventListener('input', function (e) {
        performSearch(e.target.value, 'desktop');
      });

      desktopSearchInput.addEventListener('focus', function () {
        if (this.value.trim()) {
          performSearch(this.value, 'desktop');
        }
      });

      // Hide results when clicking outside
      document.addEventListener('click', function (e) {
        if (!desktopSearchInput.contains(e.target) && !document.getElementById('desktopSearchResults').contains(e.target)) {
          hideSearchResults('desktop');
        }
      });
    }

    // Mobile search
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', function (e) {
        performSearch(e.target.value, 'mobile');
      });

      mobileSearchInput.addEventListener('focus', function () {
        if (this.value.trim()) {
          performSearch(this.value, 'mobile');
        }
      });

      // Hide results when clicking outside (for mobile)
      document.addEventListener('click', function (e) {
        const mobileSearchBar = document.getElementById('mobileSearchBar');
        const mobileResults = document.getElementById('mobileSearchResults');
        if (!mobileSearchBar.contains(e.target) && !mobileResults.contains(e.target)) {
          hideSearchResults('mobile');
        }
      });
    }

    // Handle Enter key press for search
    function handleSearchEnter(e, searchType) {
      if (e.key === 'Enter' && e.target.value.trim()) {
        e.preventDefault();
        // Redirect to search results page with query
        window.location.href = `./search.html?q=${encodeURIComponent(e.target.value)}`;
      }
    }

    if (desktopSearchInput) {
      desktopSearchInput.addEventListener('keypress', (e) => handleSearchEnter(e, 'desktop'));
    }

    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('keypress', (e) => handleSearchEnter(e, 'mobile'));
    }

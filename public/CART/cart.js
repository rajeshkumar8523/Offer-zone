const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML =
      `<p class="text-gray-500 text-center">Your cart is empty 🛒</p>`;
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
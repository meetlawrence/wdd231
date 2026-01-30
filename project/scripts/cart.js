// cart.js

// Load initial state
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(food, vendorName) {
    const cartItem = {
        ...food,
        vendorName,
        cartId: Date.now() + Math.random()
    };
    cart.push(cartItem);
    saveCart();
    updateCartBadge();
}

export function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartBadge();
    renderCartItems(); // Refresh the list in the drawer
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = cart.length;
        if (cart.length > 0) {
            badge.classList.remove('hidden');
            badge.style.display = 'flex'; // Ensure it shows
        } else {
            badge.classList.add('hidden');
            badge.style.display = 'none';
        }
    }
}

export function renderCartItems() {
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-amount');
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding: 20px;">Your basket is empty!</p>`;
        if (totalEl) totalEl.textContent = "₦0";
        return;
    }

    list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <small>${item.vendorName}</small>
                <p>₦${Number(item.price).toLocaleString()}</p>
            </div>
            <button class="remove-btn" data-id="${item.cartId}">✕</button>
        </div>
    `).join('');

    // Calculate Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if (totalEl) totalEl.textContent = `₦${total.toLocaleString()}`;

    // Add event listeners to remove buttons
    list.querySelectorAll('.remove-btn').forEach(btn => {
        btn.onclick = () => removeFromCart(Number(btn.dataset.id));
    });
}
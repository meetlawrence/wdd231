function addToCart(food, vendor) {
    const existingItem = cart.find(item => item.id === food.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...food, vendorName: vendor.name, quantity: 1 });
    }
    updateCart();
    saveCartToStorage();
    
    const cartBtn = document.getElementById('cart-button');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = totalItems;
    cartCount.classList.toggle('hidden', totalItems === 0);

    if (cart.length === 0) {
        document.getElementById('cart-empty').classList.remove('hidden');
        document.getElementById('cart-footer').classList.add('hidden');
        cartItemsContainer.innerHTML = '';
    } else {
        document.getElementById('cart-empty').classList.add('hidden');
        document.getElementById('cart-footer').classList.remove('hidden');
        
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-vendor">${item.vendorName}</p>
                    <p class="cart-item-price">₦${item.price * item.quantity}</p>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
            </div>
        `).join('');

        document.getElementById('cart-total').textContent = `₦${subtotal + 200}`;
    }
}

function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    } else {
        const item = cart.find(item => item.id === id);
        if (item) item.quantity = newQuantity;
    }
    updateCart();
    saveCartToStorage();
}

// 8. Storage & UI State
function saveCartToStorage() { localStorage.setItem('cart', JSON.stringify(cart)); }
function loadCartFromStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) { cart = JSON.parse(saved); updateCart(); }
}

function openCart() { 
    document.getElementById('cart-sidebar').classList.add('show'); 
    document.getElementById('cart-overlay').classList.add('show'); 
    document.body.style.overflow = 'hidden';
}

function closeCart() { 
    document.getElementById('cart-sidebar').classList.remove('show'); 
    document.getElementById('cart-overlay').classList.remove('show'); 
    document.body.style.overflow = '';
}

function clearCart() { if(confirm('Clear your cart?')) { cart = []; updateCart(); saveCartToStorage(); } }
function placeOrder() { alert('Order Received! Your food will arrive at Malabor shortly!'); cart = []; updateCart(); saveCartToStorage(); closeCart(); }
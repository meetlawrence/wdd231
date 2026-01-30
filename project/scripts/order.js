import { vendors, categories } from '../data/vendors.mjs';

// Global State
const appData = { vendors, categories };
let selectedCategory = 'all';
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderVendors();
    setupSearch();
});

// --- 1. Category Logic ---
function renderCategories() {
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;
    
    categoriesList.innerHTML = '';
    appData.categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `category-btn ${selectedCategory === category.id ? 'active' : ''}`;
        button.style.animationDelay = `${index * 0.05}s`;
        button.innerHTML = `
            <span class="category-emoji">${category.emoji}</span>
            <span class="category-name-text">${category.name}</span>
        `;
        button.addEventListener('click', () => {
            selectedCategory = category.id;
            renderCategories(); // Update active class
            renderVendors(document.getElementById('search-input').value.toLowerCase());
            updateVendorsTitle();
        });
        categoriesList.appendChild(button);
    });
}

// --- 2. Vendor & Food Logic ---
function renderVendors(searchTerm = '') {
    const vendorsGrid = document.getElementById('vendors-grid');
    if (!vendorsGrid) return;
    vendorsGrid.innerHTML = '';
    
    let hasVisibleVendors = false;

    appData.vendors.forEach((vendor, vendorIndex) => {
        // Deep Filter: Check foods inside the vendor
        const filteredFoods = vendor.menu.filter(food => {
            const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
            const matchesSearch = food.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
        
        // Only show vendor if they have matching food items
        if (filteredFoods.length > 0) {
            hasVisibleVendors = true;
            vendorsGrid.appendChild(createVendorCard(vendor, filteredFoods, vendorIndex));
        }
    });

    if (!hasVisibleVendors) {
        vendorsGrid.innerHTML = `
            <div class="no-results">
                <p>Abeg, we no find that one. Try searching for something else!</p>
            </div>`;
    }
}

function createVendorCard(vendor, foods, vendorIndex) {
    const card = document.createElement('div');
    card.className = 'vendor-card';
    card.style.animationDelay = `${vendorIndex * 0.1}s`;
    
    card.innerHTML = `
        <div class="vendor-image-container">
            <img src="${vendor.image}" alt="${vendor.name}" class="vendor-image">
            <div class="vendor-gradient"></div>
            <div class="vendor-rating">⭐ ${vendor.rating}</div>
            <div class="vendor-info">
                <h3 class="vendor-name">${vendor.name}</h3>
                <div class="vendor-delivery">🕒 ${vendor.deliveryTime}</div>
            </div>
        </div>
        <div class="vendor-foods">
            <div class="food-items">
                ${foods.map((food) => {
                    // Escape data for the button
                    const foodData = JSON.stringify(food).replace(/'/g, "&apos;");
                    return `
                    <div class="food-item">
                        <img src="${food.image}" class="food-image" alt="${food.name}">
                        <div class="food-details">
                            <p class="food-name">${food.name}</p>
                            <p class="food-price">₦${food.price.toLocaleString()}</p>
                        </div>
                        <button class="add-to-cart-btn" data-food='${foodData}' data-vendor="${vendor.name}">
                            ＋
                        </button>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;

    // Attach cart events to buttons after HTML is created
    card.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const food = JSON.parse(e.currentTarget.dataset.food);
            const vendorName = e.currentTarget.dataset.vendor;
            addToCart(food, vendorName);
        });
    });

    return card;
}

// --- 3. Search & UI Helpers ---
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        renderVendors(term);
    });
}

function updateVendorsTitle() {
    const title = document.getElementById('vendors-title');
    if (!title) return;
    
    if (selectedCategory === 'all') {
        title.textContent = 'Popular Right Now 🔥';
    } else {
        const cat = appData.categories.find(c => c.id === selectedCategory);
        title.textContent = cat ? `${cat.emoji} ${cat.name}` : 'Menu';
    }
}

// --- 4. Cart Functionality ---
function addToCart(food, vendorName) {
    cart.push({ ...food, vendorName });
    
    // Update UI (Total count, etc.)
    console.log(`Added ${food.name} from ${vendorName} to cart.`);
    
    // Trigger your Toast notification
    showToast(`${food.name} added to basket!`);
}

function showToast(message) {
    const toast = document.getElementById('visit-toast');
    const msgEl = document.getElementById('toast-message');
    if (!toast) return;

    msgEl.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
// import { vendors, categories } from '../data/vendors.mjs';

// --- Global State ---
let appData = { vendors: [], categories: [] };
let selectedCategory = 'all';

// --- DOM Elements ---
const vendorsGrid = document.querySelector('#vendors-grid');
const allVendorsGrid = document.querySelector('#all-vendors-grid');
const cardsContainer = document.querySelector('#cards');
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mytitle");
const myinfo = document.querySelector("#myinfo");
const closeBtn = document.querySelector("#closeModal");
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

/**
 * ASYNCHRONOUS BOOTSTRAPPER
 * This handles fetching data and starting the page logic
 */
async function startApp() {
    const grid = document.querySelector('#vendors-grid') || document.querySelector('#all-vendors-grid');
    
    try {
        // 1. Fetch data from JSON file
        const response = await fetch('./data/vendors.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 2. Parse and assign to Global State
        const data = await response.json();
        appData = data;

        // 3. Verify data isn't empty
        if (!appData.vendors || appData.vendors.length === 0) {
            // throw new Error("EMPTY_DATASOURCE");
        }

        // 4. Run Page-Specific Logic
        initializePageLogic();
        setupCommonListeners();

        console.log("AbegChop Vendors is active... 🚀");

    } 
    
    catch (error) {
        console.error("Initialization Failed:", error);
        if (grid) {
            grid.innerHTML = `
                <div class="error-wrapper">
                    <span>🥘</span>
                    <h2>Kitchen is Empty!</h2>
                    <p>Abeg, no vendors are registered in the system yet. Check back later!</p>
                </div>
            `;
        }
    }
}

function initializePageLogic() {
    const isOrderPage = !!document.getElementById('categories-list');
    const isDirectoryPage = !!document.querySelector('#all-vendors-grid');
    const isHomePage = !!document.querySelector('#vendors-grid') && !isOrderPage && !isDirectoryPage;

    if (isHomePage) initHomePage();
    if (isDirectoryPage) renderDirectoryCards(appData.vendors, document.querySelector('#all-vendors-grid'));
    if (isOrderPage) {
        initOrderPage();
        if (window.location.hash) handleInitialScroll();
    }
}

// --- Feature: Home Page Logic ---
function initHomePage() {
    const grid = document.querySelector('#vendors-grid');
    if (!grid) return;

    // Filter vendors with high ratings
    const featured = [...appData.vendors]
        .filter(v => v.rating >= 4.5)
        .sort(() => Math.random() - 0.5) // Shuffle them
        .slice(0, 3); // Take top 3

    renderDirectoryCards(featured, grid);
}

function renderDirectoryCards(list, container) {
    if (!container) return;
    container.innerHTML = "";
    list.forEach(vendor => {
        const card = document.createElement('section');
        card.className = 'vendor-card';
        card.innerHTML = `
            <div class="vendor-image-container">
                <img src="${vendor.image}" alt="${vendor.name}" class="vendor-image" loading="lazy">
                <div class="vendor-gradient"></div>
                <div class="vendor-rating">⭐ ${vendor.rating}</div>
                <div class="vendor-info">
                    <h3 class="vendor-name">${vendor.name}</h3>
                    <div class="vendor-delivery">🕒 ${vendor.deliveryTime}</div>
                </div>
            </div>
            <h2 class="list-only-title">${vendor.name}</h2>
            <p class="list-only-info">${vendor.address}</p>
            <p class="list-only-info">${vendor.deliveryTime}</p>
            <p class="list-only-info">⭐${vendor.rating}</p>
        `;
        card.addEventListener('click', () => showVendorModal(vendor));
        container.appendChild(card);
    });
}

// --- Feature: Order Page & Menu Logic ---
function initOrderPage() {
    renderCategories();
    renderMenuVendors();
    setupSearch();
}

function renderMenuVendors(searchTerm = '') {
    const grid = document.getElementById('vendors-grid');
    if (!grid) return;

    // 1. Filter the data first
    const visibleVendors = appData.vendors
        .map(vendor => ({
            ...vendor,
            filteredMenu: vendor.menu.filter(food => 
                (selectedCategory === 'all' || food.category === selectedCategory) &&
                food.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(vendor => vendor.filteredMenu.length > 0);

    // 2. Render based on results
    if (visibleVendors.length === 0) {
        grid.innerHTML = `<div class="no-results"><p>Abeg, we no find that one!</p></div>`;
        return;
    }

    // Update the DOM 
    grid.innerHTML = '';
    visibleVendors.forEach((vendor, idx) => {
        grid.appendChild(createMenuVendorCard(vendor, vendor.filteredMenu, idx));
    });
}

function createMenuVendorCard(vendor, foods, index) {
    const card = document.createElement('div');
    card.className = 'vendor-card';
    card.id = vendor.id; // CRITICAL: This allows the window to find this card via the URL hash
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="vendor-image-container">
            <img src="${vendor.image}" class="vendor-image">
            <div class="vendor-rating">⭐ ${vendor.rating}</div>
            <div class="vendor-info"><h3 class="vendor-name">${vendor.name}</h3></div>
        </div>
        <div class="vendor-foods">
            <div class="food-items">
                ${foods.map(food => `
                    <div class="food-item">
                        <img src="${food.image}" class="food-image">
                        <div class="food-details">
                            <p class="food-name">${food.name}</p>
                            <p class="food-price">₦${food.price.toLocaleString()}</p>
                        </div>
                        <button class="add-to-cart-btn" data-food='${JSON.stringify(food).replace(/'/g, "&apos;")}' data-vendor="${vendor.name}">＋</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    card.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const food = JSON.parse(e.currentTarget.dataset.food);
            addToCart(food, e.currentTarget.dataset.vendor);
        });
    });
    return card;
}

// --- Scroll Utility ---
function handleInitialScroll() {
    // Small timeout to ensure the DOM has finished painting the vendor cards
    setTimeout(() => {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Subtle highlight effect to show the user they've arrived
            element.style.transition = "outline 0.5s ease";
            element.style.outline = "4px solid #f97316";
            setTimeout(() => element.style.outline = "none", 2000);
        }
    }, 600);
}

// --- Feature: Shared / Utility Logic ---
function showVendorModal(vendor) {
    if (!mytitle || !myinfo) return;
    mytitle.textContent = vendor.name;
    myinfo.innerHTML = `
        <div class="modal-detail">
            <p><strong>📍 Location:</strong> ${vendor.address}</p>
            <p><strong>📞 Contact:</strong> ${vendor.phone || 'N/A'}</p>
            <p><strong>📧 Email:</strong> ${vendor.email || 'N/A'}</p>
            <p><strong>📝 About:</strong> ${vendor.description || 'Quality food from Calabar.'}</p>
            <hr>
            <button id="modal-order-btn" class="btn">View Menu</button>
        </div>
    `;
    mydialog.showModal();

    document.querySelector('#modal-order-btn')?.addEventListener('click', () => {
        localStorage.setItem('selectedVendorId', vendor.id);
        window.location.href = `order.html#${vendor.id}`;
    });
}

// --- Rest of the functions (setupCommonListeners, renderCategories, addToCart, etc.) ---
function setupCommonListeners() {
    gridBtn?.addEventListener('click', () => {
        cardsContainer?.classList.replace('list', 'grid');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });
    listBtn?.addEventListener('click', () => {
        cardsContainer?.classList.replace('grid', 'list');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
    closeBtn?.addEventListener('click', () => mydialog.close());
    mydialog?.addEventListener('click', (e) => e.target === mydialog && mydialog.close());
}

function renderCategories() {
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;
    categoriesList.innerHTML = '';
    appData.categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `category-btn ${selectedCategory === category.id ? 'active' : ''}`;
        button.innerHTML = `<span class="category-emoji">${category.emoji}</span><span class="category-name-text">${category.name}</span>`;
        button.addEventListener('click', () => {
            selectedCategory = category.id;
            renderCategories();
            renderMenuVendors(document.getElementById('search-input')?.value.toLowerCase());
            updateVendorsTitle();
        });
        categoriesList.appendChild(button);
    });
}

function setupSearch() {
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        renderMenuVendors(e.target.value.toLowerCase());
    });
}

function updateVendorsTitle() {
    const title = document.getElementById('vendors-title');
    if (!title) return;
    const cat = appData.categories.find(c => c.id === selectedCategory);
    title.textContent = selectedCategory === 'all' ? 'Popular Right Now 🔥' : `${cat.emoji} ${cat.name}`;
}


document.addEventListener('DOMContentLoaded', startApp);
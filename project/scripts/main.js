import * as Theme from './theme.mjs';
import { addToCart, updateCartBadge, renderCartItems } from './cart.js';

/**
 * Navigation Logic
 */
const initMenu = () => {
    const menuBtn = document.getElementById('menu-button');
    const navMenu = document.getElementById('menu-dropdown');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('show');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
};

/**
 * Theme Logic
 */
const initTheme = () => {
    let currentTheme = Theme.getSavedTheme();
    Theme.applyThemeToBody(currentTheme);
    Theme.updateThemeIcons(currentTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            Theme.saveTheme(currentTheme);
            Theme.applyThemeToBody(currentTheme);
            Theme.updateThemeIcons(currentTheme);
        });
    }
};

/**
 * Cart Logic
 */
function initCart() {
    const btn = document.getElementById('cart-button'); 
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const closeBtn = document.getElementById('close-cart');

    if (btn && drawer && overlay) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("✅ Cart button clicked!");
            drawer.classList.add('open');
            overlay.classList.add('active');
            renderCartItems();
        });

        const hideCart = () => {
            drawer.classList.remove('open');
            overlay.classList.remove('active');
        };

        if (closeBtn) closeBtn.addEventListener('click', hideCart);
        overlay.addEventListener('click', hideCart);
        
        console.log("🛒 Cart system ready!");
    }
}

/**
 * Global App Bootstrapper
 */
const startApp = () => {
    console.log("AbegChop systems active... 🚀");
    initTheme();
    initMenu();
    initCart(); 
    updateCartBadge();
};

// ONLY ONE LISTENER HERE
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
import * as Theme from './theme.mjs';

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

const initFeaturePlaceholders = () => {
    const cartBtn = document.getElementById('cart-button');
    const trackBtn = document.getElementById('track-order');

    // Listen for Cart button
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showComingSoonModal("Your Cart", "cooking up the perfect checkout experience");
        });
    }

    // Listen for Track Order button
    if (trackBtn) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showComingSoonModal("Order Tracking", "building a real-time tracking system");
        });
    }
};

/**
 * Display a dynamic "Coming Soon" notification
 * @param {string} featureName - The name of the feature
 * @param {string} message - The specific status message
 */


function showComingSoonModal(featureName, message) {
    const mydialog = document.querySelector("#mydialog"); 
    const mytitle = document.querySelector("#mytitle");
    const myinfo = document.querySelector("#myinfo");

    if (!mydialog || !mytitle || !myinfo) return;

    mytitle.textContent = `🚧 ${featureName} Coming Soon!`;
    myinfo.innerHTML = `
        <div class="modal-detail">
            <p>Abeg hold on! We are currently <strong>${message}</strong> for you.</p>
            <p>Soon you'll be able to manage everything directly from AbegChop!</p>
            <hr>
            <button onclick="document.querySelector('#mydialog').close()" class="btn">Got it, thanks!</button>
        </div>
    `;

    mydialog.showModal();
}

/**
 * Global App Bootstrapper
 */
const startApp = () => {
    console.log("AbegChop systems active... 🚀");
    initTheme();
    initMenu();
    initFeaturePlaceholders(); // Updated name
};

document.addEventListener('DOMContentLoaded', startApp);
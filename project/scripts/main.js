import * as Theme from './theme.mjs';

/**
 * Navigation Logic
 */
const initMenu = () => {
    const menuBtn = document.getElementById('menu-button');
    const navMenu = document.getElementById('menu-dropdown');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!menuBtn || !navMenu) return; // Guard clause to prevent errors

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
 * Global App Bootstrapper
 */
const startApp = () => {
    console.log("AbegChop systems active... 🚀");
    initTheme();
    initMenu();
    // You can add initCart() or initVendors() here later!
};

document.addEventListener('DOMContentLoaded', startApp);
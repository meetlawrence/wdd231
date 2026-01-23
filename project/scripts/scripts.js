// theme.js

const themeManager = {
    currentTheme: 'light',

    init() {
        // Retrieve preference from storage or default to light
        const saved = localStorage.getItem('theme') || 'light';
        this.apply(saved);

        // Attach event listener to the toggle button
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    apply(theme) {
        this.currentTheme = theme;

        // Apply theme class to body and persist the choice
        document.body.className = `${theme}-theme`;
        localStorage.setItem('theme', theme);

        this.updateIcons();
    },

    toggle() {
        // Switch to the opposite of the current active theme
        this.apply(this.currentTheme === 'light' ? 'dark' : 'light');
    },

    updateIcons() {
        const moon = document.getElementById('theme-icon-moon');
        const sun = document.getElementById('theme-icon-sun');

        // Only proceed if both icon elements exist in the DOM
        if (moon && sun) {
            const isLight = this.currentTheme === 'light';

            // Toggle 'hidden' class based on the current theme state
            moon.classList.toggle('hidden', !isLight);
            sun.classList.toggle('hidden', isLight);
        }
    }
};

// Start the manager once the DOM is ready
document.addEventListener('DOMContentLoaded', () => themeManager.init());
// js/theme.mjs

/**
 * Gets the stored theme preference or defaults to light
 */
export const getSavedTheme = () => localStorage.getItem('theme') || 'light';

/**
 * Persists the theme choice to local storage
 */
export const saveTheme = (theme) => localStorage.setItem('theme', theme);

/**
 * Updates the CSS class on the body tag
 */
export const applyThemeToBody = (theme) => {
    document.body.className = `${theme}-theme`;
};

/**
 * Handles the visibility of the sun and moon icons
 */
export const updateThemeIcons = (theme) => {
    const moon = document.getElementById('theme-icon-moon');
    const sun = document.getElementById('theme-icon-sun');
    
    if (moon && sun) {
        const isLight = theme === 'light';
        // If light, hide sun (show moon). If dark, hide moon (show sun).
        moon.classList.toggle('hidden', !isLight);
        sun.classList.toggle('hidden', isLight);
    }
};
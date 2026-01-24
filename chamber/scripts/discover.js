/**
 * discover.js - Calabar Chamber of Commerce
 * Handles business directory rendering and modal popups.
 */
import { places } from '../data/places.mjs';

// 1. SELECT DOM ELEMENTS
const showHere = document.querySelector('#allPlaces');
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mytitle"); 
const myinfo = document.querySelector("#myinfo");
const closeBtn = document.querySelector("#closeModal");

// 2. RENDER BUSINESS CARDS
const displayPlaces = (placeList) => {
    // Inject the cards into the grid container
    showHere.innerHTML = placeList.map(place => `
        <section class="card">
            <figure>
                <img src="images/discover/${place.photo_url}" alt="${place.name}" loading="lazy">
            </figure>
            <h2>${place.name}</h2>
            <address><strong>Address:</strong> ${place.address}</address>
            <p>${place.description}</p>
            <button class="learnMoreBtn" data-name="${place.name}">Learn More</button>
        </section>
    `).join('');

    // 3. ATTACH EVENT LISTENERS TO BUTTONS
    const buttons = document.querySelectorAll('.learnMoreBtn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const placeName = button.getAttribute('data-name');
            const placeData = placeList.find(p => p.name === placeName);
            showStuff(placeData);
        });
    });
}

// 4. MODAL DISPLAY LOGIC
function showStuff(place) {
    if (!place) return;
    
    mytitle.textContent = place.name;
    myinfo.innerHTML = `
        <p><strong>Cost:</strong> ${place.cost || 'N/A'}</p>
        <p><strong>Details:</strong> ${place.description}</p>
        <p><strong>Location:</strong> ${place.address}</p>
    `;
    
    mydialog.showModal();
}

// 5. CLOSE MODAL LOGIC
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        mydialog.close();
    });
}

// Close modal if user clicks outside the dialog content
mydialog.addEventListener('click', (event) => {
    if (event.target === mydialog) {
        mydialog.close();
    }
});

// 6. INITIALIZE
displayPlaces(places);
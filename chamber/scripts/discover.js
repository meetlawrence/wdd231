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

            <button class="learnMoreBtn" data-name="${place.name}">Learn More</button>
        </section>
    `).join('');

    // <div class="card-content"></div>

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

// MODAL DISPLAY LOGIC
function showStuff(place) {
    if (!place) return;
    
    mytitle.textContent = place.name;
    myinfo.innerHTML = `
        <p><strong>Cost:</strong> ${place.cost || 'N/A'}</p>
        <p><strong>Description:</strong> ${place.description}</p>
        <p><strong>Location:</strong> ${place.address}</p>
    `;
    
    mydialog.showModal();
}

// CLOSE MODAL LOGIC
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

// INITIALIZE
displayPlaces(places);
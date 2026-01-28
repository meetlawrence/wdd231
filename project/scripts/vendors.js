import { vendors } from '../data/vendors.mjs';

const showHere = document.querySelector('#all-vendors-grid');
const cardsContainer = document.querySelector('#cards'); 
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mytitle"); 
const myinfo = document.querySelector("#myinfo");
const closeBtn = document.querySelector("#closeModal");

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

function displayVendors(vendorList) {
    if (!showHere) return;
    showHere.innerHTML = ""; 

    vendorList.forEach((vendor) => {
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
            <p class="list-only-info">${vendor.number}</p>
        `;

        card.addEventListener('click', () => showStuff(vendor));
        showHere.appendChild(card);
    });
}


function showStuff(vendor) {
    mytitle.textContent = vendor.name;
    myinfo.innerHTML = `
        <div class="modal-detail">
            <p><strong>📍 Location:</strong> ${vendor.address}</p>
            <p><strong>📞 Contact:</strong> ${vendor.number}</p>
            <p><strong>✉️ Email:</strong> ${vendor.email}</p>
            <p><strong>📝 About:</strong> ${vendor.description || 'Quality food from the heart of Calabar.'}</p>
            <hr>
            <button id="order-btn" class="btn">Order from ${vendor.name}</button>
        </div>
    `;
    mydialog.showModal();
}

// Toggle logic
gridBtn?.addEventListener('click', () => {
    cardsContainer.classList.add('grid');
    cardsContainer.classList.remove('list');

    // Manage active states
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn?.addEventListener('click', () => {
    cardsContainer.classList.add('list');
    cardsContainer.classList.remove('grid');

    // Manage active states
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

closeBtn?.addEventListener('click', () => mydialog.close());
mydialog.addEventListener('click', (e) => e.target === mydialog && mydialog.close());
displayVendors(vendors);
import { vendors } from '../data/vendors.mjs';

const showHere = document.querySelector('#vendors-grid');
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mytitle"); 
const myinfo = document.querySelector("#myinfo");
const closeBtn = document.querySelector("#closeModal");

const shuffleVendors = (array) => [...array].sort(() => Math.random() - 0.5);

function displayVendors(vendorList) {
    if (!showHere) return;
    
    showHere.innerHTML = ""; 

    // 1. Filter for 4.5+ Rating
    // 2. Shuffle the result
    // 3. Take only the top 3
    const featured = shuffleVendors(vendorList.filter(v => v.rating >= 4.5)).slice(0, 3);

    featured.forEach((vendor) => {
        const card = document.createElement('div');
        card.className = 'vendor-card';
        
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
        `;

        card.addEventListener('click', () => showStuff(vendor));
        showHere.appendChild(card);
    });
}

function showStuff(vendor) {
    if (!vendor) return;
    
    mytitle.textContent = vendor.name;
    myinfo.innerHTML = `
        <div class="modal-detail">
            <p><strong>📍 Location:</strong> ${vendor.address}</p>
            <p><strong>📝 Description:</strong> ${vendor.description}</p>
            <p><strong>🕒 Prep Time:</strong> ${vendor.deliveryTime}</p>
            <hr>
            <button id="order-btn" class="primary-btn">View Full Menu & Order</button>
        </div>
    `;
    
    mydialog.showModal();

    document.querySelector('#order-btn').addEventListener('click', () => {
        localStorage.setItem('selectedVendorId', vendor.id);
        window.location.href = 'order.html';
    });
}

closeBtn?.addEventListener('click', () => mydialog.close());
mydialog.addEventListener('click', (e) => e.target === mydialog && mydialog.close());

displayVendors(vendors);
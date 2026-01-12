const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    // Passing the 'company' array from your JSON
    displayCompanies(data.company);
}

getCompanyData();

const displayCompanies = (companies) => {
    cards.innerHTML = ""; // Clear existing content

    companies.forEach((company) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a');

        // Text Content
        name.textContent = company.name;
        address.textContent = company.address;
        number.textContent = company.number;
        email.textContent = company.email;
        website.textContent = company.website;
        
        // Website Link
        // website.textContent = "Visit Website";
        // website.setAttribute('href', `https://${company.website}`);
        // website.setAttribute('target', '_blank');

        // Image Attributes
        image.setAttribute('src', company.image); // Direct path from JSON
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');

        // Assembly
        card.appendChild(image);
        // card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(email);
        card.appendChild(website);

        cards.appendChild(card);
    });
}
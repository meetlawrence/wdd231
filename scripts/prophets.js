const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Table of console method to check data response
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  // card build code goes here
  prophets.forEach((prophet) => {
    // card build code goes here
    // Create elements to add the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let dob = document.createElement('p');
    let placeOfBirth = document.createElement('p');
    let portrait = document.createElement('img');
    // card.classList.add("prophet-card"); // This enabled me to exclusively design the card

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    // This line builds the Date of Birth and place of birth content
    dob.innerHTML = `<span class = "label">Birthdate:</span> ${prophet.birthdate}`; 
    placeOfBirth.innerHTML = `<span class = "label"> Birthplace:</span> ${prophet.birthplace}`;

    // This line builds the image portrait setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // This line Appends the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(dob);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and foreach loop
}

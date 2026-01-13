/* ============================================ */
/* CHAMBER MEMBER SPOTLIGHT LOGIC               */
/* ============================================ */

const jsonURL = "data/members.json"; // Path to your JSON file

async function getSpotlight() {
    try {
        const response = await fetch(jsonURL);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data.company);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching spotlights:", error);
    }
}

function displaySpotlights(members) {
    const wrapper = document.querySelector('#spotlight-wrapper');
    wrapper.innerHTML = "";

    // 1. Filter for Gold and Silver members only
    const eligibleMembers = members.filter(m => m.level === "Gold" || m.level === "Silver");

    // 2. Shuffle the array to get random members
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

    // 3. Select the top 3 members from the shuffled list
    const selectedMembers = shuffled.slice(0, 3);

    selectedMembers.forEach(member => {
        const spotlightCard = `
            <div class="spotlight-card ${member.level.toLowerCase()}">
                <h3 class="spotlight-name">${member.name}</h3>
                <div class="spotlight-body">
                    <img src="${member.image}" alt="${member.name} Logo" class="spotlight-logo">
                    <div class="spotlight-info">
                        <p><strong>${member.level} Member</strong></p>
                        <p>${member.address}</p>
                        <p>${member.number}</p>
                        <a href="https://${member.website}" target="_blank">${member.website}</a>
                    </div>
                </div>
            </div>
        `;
        wrapper.innerHTML += spotlightCard;
    });
}

getSpotlight();
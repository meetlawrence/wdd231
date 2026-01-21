const levels = [
    {
        title: 'Non-Profit Membership',
        info: 'Designed for registered NGOs and community organizations. This tier provides visibility in our non-profit directory, access to civic advocacy meetings, and discounted rates for Chamber community events. Membership is complimentary upon verification of non-profit status.'
    },
    {
        title: 'Bronze Membership',
        info: 'Perfect for startups and small businesses (SMEs) in Calabar. Benefits include a basic listing in the Chamber Directory, access to monthly networking mixers, business training workshops, and official Chamber branding for your storefront or website.'
    },
    {
        title: 'Silver Membership',
        info: 'Our mid-level tier for established growing enterprises. Includes all Bronze benefits plus: priority placement in the member directory, certificate of membership, invitations to private meetings with local policy makers, and two featured spotlight posts on our social media platforms annually.'
    },
    {
        title: 'Gold Membership',
        info: 'The premium executive tier for industry leaders. Gold members enjoy exclusive access to international trade missions, VIP seating at the Canaan City Trade Fair, a dedicated account manager, and permanent logo placement on our homepage and in the Chamber main hall.'
    }
];

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");

myclose.addEventListener("click", () => mydialog.close())


function displayItems(data) {
    showHere.innerHTML = "";
    data.forEach(item => {
        // This creates the card container
        let card = document.createElement("section");
        card.classList.add("membership-card");

        // This adds the content to the card
        card.innerHTML = `
        <h3 class="card-title"> ${item.title}</h3>
        
        `;

        // This creates the button
        let btn = document.createElement("button");
        btn.textContent = "Learn More";
        btn.classList.add("learn-more-btn");

        // This creates the Modal Trigger
        btn.addEventListener("click", () => {
            showStuff(item);
        });

        // Assemble and Append
        card.appendChild(btn);
        showHere.appendChild(card);
    })

} // function end

displayItems(levels)


function showStuff(item) {
    mytitle.innerHTML = item.title
    myinfo.innerHTML = item.info
    mydialog.showModal();
}

// Function to capture the current date and time on page load
window.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    
    // This sets the value to the current date and time in a readable ISO format
    const now = new Date();
    timestampField.value = now.toISOString(); 

    // For debugging: Verify in console that the time was captured
    console.log("Form loaded at: " + timestampField.value);
});


// const openButton = document.querySelector("#openButton");
// const dialogBox = document.querySelector("#dialogBox");
// const closeButton = document.querySelector("#closeButton");
// const dialogBoxText = document.querySelector("#dialogBox div");


// // Show the dialogue button
// openButton1.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `One Apple contains 95 calories`
// });
// openButton2.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `One Orange contains 45 calories`
// });
// openButton3.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `One Banana contains 205 calories`
// });

// openButton4.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `One Mango contains 205 calories`
// });

// // Close button closes the dialog 
// closeButton.addEventListener("click", () => {
//     dialogBox.close();
// });

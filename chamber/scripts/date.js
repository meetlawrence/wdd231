// Current Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified
const ModifiedDate = new Date(document.lastModified);

let options = {
	weekday: "short",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	hour12: true
};

let formatted = ModifiedDate.toLocaleString("en-Us", options);
document.getElementById("lastmodified").textContent = "Last Modification: " + formatted;



// // --- Visit Tracker Toast Logic ---
// const visitMessage = document.querySelector("#visit-message");
// const toast = document.querySelector("#visit-toast");
// const closeToast = document.querySelector("#close-toast");
// const today = Date.now();
// const msPerDay = 86400000; 

// const lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

// if (lastVisit === 0) {
//     visitMessage.textContent = "Welcome! Let us know if you have any questions.";
// } else {
//     const timeDiff = today - lastVisit;
//     const daysPassed = Math.floor(timeDiff / msPerDay);

//     if (timeDiff < msPerDay) {
//         visitMessage.textContent = "Back so soon! Awesome!";
//     } else {
//         const unit = daysPassed === 1 ? "day" : "days";
//         visitMessage.textContent = `You last visited ${daysPassed} ${unit} ago.`;
//     }
// }

// // Show the toast after a 1-second delay
// setTimeout(() => {
//     toast.classList.add("show");
// }, 1000);

// // Close button logic
// closeToast.addEventListener("click", () => {
//     toast.classList.remove("show");
// });

// window.localStorage.setItem("lastVisit-ls", today);


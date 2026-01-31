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

// Current Year
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Last Modified
const lastModElement = document.getElementById("lastmodified");
if (lastModElement) {
    const ModifiedDate = new Date(document.lastModified);

    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    };

    const formatted = ModifiedDate.toLocaleString("en-US", options);
    lastModElement.textContent = `Last Modification: ${formatted}`;
}
const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);


// This function converts the time to readable. Gotten online
function formatTime(time) {
    if (!time) return "N/A";
    const date = new Date(time);
    return date.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// console.log(myInfo.get("first"));
// console.log(myInfo.get("last"));
// console.log(myInfo.get("phone"));
// console.log(myInfo.get("email"));
// console.log(myInfo.get("ordinance"));
// console.log(myInfo.get("date"));
// console.log(myInfo.get("location"));

document.querySelector("#results").innerHTML = `
<p><strong>Registrant:</strong> <span>${myInfo.get("first")} ${myInfo.get("last")}</span></p>
<p><strong>Title:</strong> <span>${myInfo.get("org-title")}</span></p>
<p><strong>Email:</strong> <span>${myInfo.get("email")}</span></p>
<p><strong>Phone:</strong> <span>${myInfo.get("phone")}</span></p>
<p><strong>Organization:</strong> <span>${myInfo.get("organization")}</span></p>
<p><strong>Membership:</strong> <span>${myInfo.get("membership")}</span></p>
<p><strong>Description:</strong> <span>${myInfo.get("description")}</span></p>
<p><strong>Submission Date:</strong> <span>${formatTime(myInfo.get("timestamp"))}</span></p>
`
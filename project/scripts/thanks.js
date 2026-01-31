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

console.log(myInfo.get("first"));
console.log(myInfo.get("last"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("email"));


document.querySelector("#results").innerHTML = `
<p><strong>Registrant:</strong> <span>${myInfo.get("first")} ${myInfo.get("last")}</span></p>
<p><strong>Business Name:</strong> <span>${myInfo.get("business-name")}</span></p>
<p><strong>Business Type:</strong> <span>${myInfo.get("business-type")}</span></p>
<p><strong>Email:</strong> <span>${myInfo.get("email")}</span></p>
<p><strong>Phone:</strong> <span>${myInfo.get("phone")}</span></p>
<p><strong>Preparation Time:</strong> <span>${myInfo.get("prep-time")} Mins</span></p>
<p><strong>Address:</strong> <span>${myInfo.get("address")}</span></p>
<p><strong>Description:</strong> <span>${myInfo.get("description")}</span></p>
`
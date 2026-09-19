// Get information from the URL
const params = new URLSearchParams(window.location.search);

const admin = params.get("admin");

// Your WhatsApp number
const whatsappNumber = "254783952185";

// Find page elements
const adminCode = document.getElementById("adminCode");
const whatsappButton = document.getElementById("whatsappButton");

// If an admin/reference code was provided
if (admin) {

    adminCode.textContent = admin;

} else {

    adminCode.textContent = "GENERAL";

}

// Create the WhatsApp message
let message;

if (admin) {

    message =
        `Hello, I am interested in your services. My reference code is ${admin}.`;

} else {

    message =
        "Hello, I am interested in your services.";

}

// Create WhatsApp URL
const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// Attach WhatsApp URL to button
whatsappButton.href = whatsappURL;
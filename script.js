const params = new URLSearchParams(window.location.search);

const admin = params.get("admin") || "GENERAL";

const whatsappNumber = "254783952185";

const message =
    `Hello, I am interested in your services. My reference code is ${admin}.`;

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.location.replace(whatsappURL);
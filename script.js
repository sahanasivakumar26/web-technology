
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! The form is valid, but your message has not been sent.";
    formMessage.style.color = "green";

    contactForm.reset();
});
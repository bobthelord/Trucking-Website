/* =========================================
GLOBAL TRUCKS & LOGISTICS
JAVASCRIPT
========================================= */

/* =========================================
MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {


navLinks.classList.toggle("active");

const icon = menuButton.querySelector("i");

if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}


});

/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {


link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuButton.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});


});

/* =========================================
ANIMATED STATISTICS
========================================= */

const counters = document.querySelectorAll(".stat h2");

const observer = new IntersectionObserver(
entries => {


    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {
                counter.textContent = target;
                return;
            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);
        };

        updateCounter();

        observer.unobserve(counter);

    });

},
{
    threshold: 0.5
}


);

counters.forEach(counter => {
observer.observe(counter);
});

/* =========================================
QUOTE FORM
========================================= */

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", function(event) {


event.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();
const pickup = document.getElementById("pickup").value.trim();
const delivery = document.getElementById("delivery").value.trim();
const service = document.getElementById("service").value;

if (
    !name ||
    !phone ||
    !email ||
    !pickup ||
    !delivery ||
    !service
) {

    formMessage.textContent =
        "Please complete all required fields.";

    formMessage.style.color = "#d71920";

    return;
}


formMessage.textContent =
    `Thanks ${name}! Your quote request has been received.`;

formMessage.style.color = "#16803c";


quoteForm.reset();


});

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
".service-card, .fleet-card, .about-content, .about-image, .quote-form"
);

const revealObserver = new IntersectionObserver(
entries => {


    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.15
}


);

revealElements.forEach(element => {


element.classList.add("reveal");

revealObserver.observe(element);


});

/* =========================================
ADD REVEAL CSS
========================================= */

const revealStyle = document.createElement("style");

revealStyle.textContent = `

.reveal {
opacity: 0;
transform: translateY(35px);
transition:
opacity 0.7s ease,
transform 0.7s ease;
}

.reveal.show {
opacity: 1;
transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);

/* =========================================
HEADER SHADOW ON SCROLL
========================================= */

window.addEventListener("scroll", () => {


const header = document.querySelector(".header");

if (window.scrollY > 50) {

    header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.12)";

} else {

    header.style.boxShadow =
        "0 2px 20px rgba(0,0,0,0.08)";

}


});

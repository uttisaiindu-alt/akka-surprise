const welcomeCard = document.querySelector(".welcome-card");
const surpriseCard = document.querySelector("#surprise");

surpriseCard.style.display = "none";

document.querySelector(".welcome-card button").onclick = function () {
    welcomeCard.style.display = "none";
    surpriseCard.style.display = "block";
};

function goBack() {
    surpriseCard.style.display = "none";
    welcomeCard.style.display = "block";
}

// Floating hearts 💗

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);
// Cinematic Photo Slideshow 💗

const slides = [
    {
        image: "sis%201.jpeg",
        caption: "My favourite memory 💗"
    },
    {
        image: "sis%202.jpeg",
        caption: "Partners in crime 😂"
    },
    {
        image: "sis%203.jpeg",
        caption: "My forever person 🥹"
    }
];

let currentSlide = 0;

function showSlide() {
    const image = document.getElementById("slideImage");
    const caption = document.getElementById("slideCaption");

    image.style.opacity = "0";

    setTimeout(function () {
        image.src = slides[currentSlide].image;
        caption.textContent = slides[currentSlide].caption;
        image.style.opacity = "1";
    }, 250);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function previousSlide() {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide();
}
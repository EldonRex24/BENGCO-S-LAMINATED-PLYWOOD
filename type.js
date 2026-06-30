// =======================
// REVEAL ANIMATION
// =======================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            section.classList.add("active");
        }

    });

});

// =======================
// INTRO SCREEN
// =======================

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("intro");

        if (intro) {
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.style.display = "none";
            }, 1000);
        }

    }, 3000);

});

// =======================
// IMAGE MODAL (tap to zoom)
// =======================
// Note: your HTML calls openImage() and closeImage() on click,
// but these functions were missing from the original script.js.
// Added here so the color cards and price list image actually
// open in a fullscreen modal when tapped (especially useful on mobile).

const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openImage(src) {
    modalImg.src = src;
    imageModal.classList.add("active");
}

function closeImage() {
    imageModal.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Collage Background Images
    ========================== */

    const images = [
        "grid/image1.jpg",
        "grid/image2.jpg",
        "grid/image3.jpg",
        "grid/image4.jpg",
        "grid/image5.jpg",
        "grid/image6.jpg",
        "grid/image7.jpg",
        "grid/image8.jpg",
        "grid/image9.jpg",
        "grid/image10.jpg",
        "grid/image11.jpg",
        "grid/image12.jpg",
        "grid/image13.jpg",
        "grid/image14.jpg",
        "grid/image15.jpg",
        "grid/image16.jpg"
    ];

    const collage = document.getElementById("collage");

    if (collage) {
        const totalImages = 40;

        for (let i = 0; i < totalImages; i++) {
            const img = document.createElement("img");
            img.src = images[i % images.length];

            const span = Math.floor(Math.random() * 3) + 1;
            img.style.gridRow = `span ${span}`;

            collage.appendChild(img);
        }
    }

    /* =========================
       Cycling Image Section
    ========================== */

    const cycleImages = [
        "Amisha Images/image (1).jpeg",
        "Amisha Images/image (2).jpeg",
        "Amisha Images/image (3).jpeg",
        "Amisha Images/image (4).jpeg",
        "Amisha Images/image (5).jpeg",
        "Amisha Images/image (6).jpeg",
        "Amisha Images/image (7).jpeg",
        "Amisha Images/image (8).jpeg",
        "Amisha Images/image (9).jpeg",
        "Amisha Images/image (10).jpeg",
        "Amisha Images/image (11).jpeg",
        "Amisha Images/image (12).jpeg",
        "Amisha Images/image (13).jpeg",
        "Amisha Images/image (14).jpeg",
        "Amisha Images/image (15).jpeg",
        "Amisha Images/image (16).jpeg",
        "Amisha Images/image (17).jpeg",
        "Amisha Images/image (18).jpeg",
        "Amisha Images/image (19).jpeg",
        "Amisha Images/image (20).jpeg",
        "Amisha Images/image (21).jpeg",
        "Amisha Images/image (22).jpeg",
        "Amisha Images/image (23).jpeg",
        "Amisha Images/image (24).jpeg",
        "Amisha Images/image (25).jpeg",
        "Amisha Images/image (26).jpeg",
        "Amisha Images/image (27).jpeg",
        "Amisha Images/image (28).jpeg",
        "Amisha Images/image (29).jpeg",
        "Amisha Images/image (30).jpeg",
        "Amisha Images/image (31).jpeg",
        "Amisha Images/image (32).jpeg",
        "Amisha Images/image (33).jpeg",
        "Amisha Images/image (34).jpeg",
        "Amisha Images/image (35).jpeg",
        "Amisha Images/image (36).jpeg",
        "Amisha Images/image (37).jpeg",
        "Amisha Images/image (38).jpeg",
        "Amisha Images/image (39).jpeg",
        "Amisha Images/image (40).jpeg",
        "Amisha Images/image (41).jpeg",
        "Amisha Images/image (42).jpeg",
        "Amisha Images/image (43).jpeg",
        "Amisha Images/image (44).jpeg",
        "Amisha Images/image (45).jpeg",
        "Amisha Images/image (46).jpeg"
    ];

    let currentIndex = 0;

    const cycleImage = document.getElementById("cycleImage");
    const nextBtn = document.getElementById("nextBtn");

    if (cycleImage && nextBtn) {

        // Force first image on load
        cycleImage.src = cycleImages[0];

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % cycleImages.length;
            cycleImage.src = cycleImages[currentIndex];
        });
    }

    const loader = document.getElementById("loader");

setTimeout(() => {
    loader.classList.add("hide");
}, 1200); // delay for smooth feel

/* =========================
   Dashboard Scroll Behavior
========================== */

const dashboard = document.querySelector(".dashboard");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
        // Always show at top
        dashboard.classList.remove("hide");
    } 
    else if (currentScrollY > lastScrollY) {
        // Scrolling down → hide
        dashboard.classList.add("hide");
    } 
    else {
        // Scrolling up → show
        dashboard.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});


});

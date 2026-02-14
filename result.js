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
        "Amisha/image%20(1).jpeg",
        "Amisha/image%20(2).jpeg",
        "Amisha/image%20(3).jpeg",
        "Amisha/image%20(4).jpeg",
        "Amisha/image%20(5).jpeg",
        "Amisha/image%20(6).jpeg",
        "Amisha/image%20(7).jpeg",
        "Amisha/image%20(8).jpeg",
        "Amisha/image%20(9).jpeg",
        "Amisha/image%20(10).jpeg",
        "Amisha/image%20(11).jpeg",
        "Amisha/image%20(12).jpeg",
        "Amisha/image%20(13).jpeg",
        "Amisha/image%20(14).jpeg",
        "Amisha/image%20(15).jpeg",
        "Amisha/image%20(16).jpeg",
        "Amisha/image%20(17).jpeg",
        "Amisha/image%20(18).jpeg",
        "Amisha/image%20(19).jpeg",
        "Amisha/image%20(20).jpeg",
        "Amisha/image%20(21).jpeg",
        "Amisha/image%20(22).jpeg",
        "Amisha/image%20(23).jpeg",
        "Amisha/image%20(24).jpeg",
        "Amisha/image%20(25).jpeg",
        "Amisha/image%20(26).jpeg",
        "Amisha/image%20(27).jpeg",
        "Amisha/image%20(28).jpeg",
        "Amisha/image%20(29).jpeg",
        "Amisha/image%20(30).jpeg",
        "Amisha/image%20(31).jpeg",
        "Amisha/image%20(32).jpeg",
        "Amisha/image%20(33).jpeg",
        "Amisha/image%20(34).jpeg",
        "Amisha/image%20(35).jpeg",
        "Amisha/image%20(36).jpeg",
        "Amisha/image%20(37).jpeg",
        "Amisha/image%20(38).jpeg",
        "Amisha/image%20(39).jpeg",
        "Amisha/image%20(40).jpeg",
        "Amisha/image%20(41).jpeg",
        "Amisha/image%20(42).jpeg",
        "Amisha/image%20(43).jpeg",
        "Amisha/image%20(44).jpeg",
        "Amisha/image%20(45).jpeg",
        "Amisha/image%20(46).jpeg"
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

document.querySelectorAll("button, .dash-btn").forEach(el => {
    el.addEventListener("click", () => {
        el.blur();
    });
});





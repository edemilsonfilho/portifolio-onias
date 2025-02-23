document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("closeBtn");

    menuToggle.addEventListener("click", function () {
        menuOverlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", function (e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
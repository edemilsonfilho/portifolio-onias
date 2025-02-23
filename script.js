document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("closeBtn");

    menuToggle.addEventListener("click", function () {
        menuOverlay.classList.add("active");
        menuToggle.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        menuToggle.classList.remove("active");
    });

    menuOverlay.addEventListener("click", function (e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });

    const links = document.querySelectorAll(".menu-items a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");

    // Check which page is currently open
    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    // Highlight the correct navigation link
    function updateActiveLink() {

        if (currentPage === "projects.html") {

            navLinks.forEach(function (link) {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "projects.html"
                );
            });

            return;
        }

        // On the homepage, determine whether HOME or ABOUT ME
        // is currently visible based on the scroll position.

        const aboutSection = document.getElementById("about");

        let currentSection = "home";

        if (aboutSection) {

            const aboutPosition =
                aboutSection.getBoundingClientRect().top;

            if (aboutPosition <= 120) {
                currentSection = "about";
            }

        }

        navLinks.forEach(function (link) {

            const href = link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === "#" + currentSection
            );

        });

    }

    // Update navigation while scrolling
    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });

    // Update navigation when clicking
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            setTimeout(updateActiveLink, 100);

        });

    });

    updateActiveLink();

});

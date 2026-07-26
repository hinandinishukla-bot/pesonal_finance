document.addEventListener("DOMContentLoaded", function () {

    console.log("Finance Planner JavaScript loaded successfully!");

    // ==========================================
    // Mobile Sidebar Toggle
    // ==========================================

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {

        menuButton.addEventListener("click", function () {

            sidebar.classList.toggle("active");

        });
    }


    // ==========================================
    // Close Sidebar When Clicking a Link
    // ==========================================

    const sidebarLinks = document.querySelectorAll("#sidebar a");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                sidebar.classList.remove("active");

            }

        });

    });


    // ==========================================
    // User Logout Confirmation
    // ==========================================

    const logoutButtons = document.querySelectorAll(".logout-button");

    logoutButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const confirmLogout = confirm(
                "Are you sure you want to logout?"
            );

            if (!confirmLogout) {

                event.preventDefault();

            }

        });

    });

});
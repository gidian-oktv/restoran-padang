document.addEventListener("DOMContentLoaded", () => {
  // Muat navigasi secara dinamis
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;

      // Setelah navigasi dimuat, aktifkan Feather Icons
      feather.replace();

      // Cari elemen hamburger menu dan tambahkan logika
      const navbarNav = document.querySelector(".navbar-nav");
      const hamburger = document.querySelector("#hamburger-menu");

      if (hamburger) {
        hamburger.onclick = () => {
          navbarNav.classList.toggle("active");
        };

        document.addEventListener("click", (e) => {
          if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove("active");
          }
        });
      } else {
        console.error("Hamburger menu not found after nav.html loaded!");
      }
    })
    .catch((error) => console.error("Error loading navigation:", error));
});



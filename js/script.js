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


// Alpine Ayam Start
document.addEventListener("alpine:init", () => {
  Alpine.data("ayam", () => ({
    items: [
      { id: 1, name: "Ayam Bakar", img: "ayam-bakar.jpg", price: 22000},
      { id: 2, name: "Ayam Gulai", img: "ayam-gulai.jpe", price: 23000},
      { id: 3, name: "Ayam Pop", img: "ayam-pop.jpg", price: 23000},
      { id: 4, name: "Ayam Goreng", img: "ayam-goreng.jpeg", price: 20000},
    ],
  }));

  Alpine.data("ikan", () => ({
    items: [
      { id: 1, name: "Kakap Gulai", img: "ikan-kakap.jpg", price: 30000},
      { id: 2, name: "Bandeng Bakar", img: "bandeng-bakar.jpg", price: 23000},
      { id: 3, name: "Kembung Goreng", img: "kembung-goreng.jpg", price: 20000},
      { id: 4, name: "Kembung Bakar", img: "kembung-bakar.jpg", price: 23000},
      { id: 5, name: "Cumi Gulai", img: "cumi-gulai.jpg", price: 27000},
      { id: 6, name: "Udang Balado", img: "udang-balado.jpg", price: 25000},
    ],
  }));
});
// Alpine Ayam End

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
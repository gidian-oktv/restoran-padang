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
        hamburger.onclick = (e) => {
          navbarNav.classList.toggle("active");
          e.preventDefault();
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

  Alpine.data("daging", () => ({
    items: [
      { id: 1, name: "Rendang", img:"rendang.jpg", price: 23000},
      { id: 2, name: "Dendeng Balado",img: "dendeng-balado.jpg", price: 25000},
      { id: 3, name: "Cincang Gulai",img: "gulai-cincang.jpg", price: 25000},
      { id: 4, name: "Babat Gulai",img: "gulai-babat.jpg", price: 24000},
      { id: 5, name: "Gulai Kikil",img: "gulai-kikil.jpg", price: 24000},
    ]
  }));

  Alpine.data("tambahan", () => ({
    items: [
      { id: 1, name: "Nasi Putih", img:"nasi.jpeg", price: 8000},
      { id: 2, name: "Ati Ampela Balado",img: "ati-ampela-balado.jpg", price: 11000},
      { id: 3, name: "Sambal",img: "sambal.jpg", price: 5000},
      { id: 4, name: "Telur Balado",img: "telur-balado.jpe", price: 8000},
      { id: 5, name: "Sayur Asem",img: "sayur-asam.jpe", price: 12000},
      { id: 6, name: "Perkedel",img: "perkedel.jpg", price: 5000},
      { id: 7, name: "Kerupuk Kulit",img: "kerupuk-kulit.jpg", price: 10000},
    ]
  }));

  Alpine.data("minuman", () => ({
    items: [
      { id: 1, name: "Aqua 330mL", img:"aqua.png", price: 8000},
      { id: 2, name: "Teh Tawar",img: "teh-tawar.jpg", price: 8000},
      { id: 3, name: "Teh Manis Panas",img: "teh-manis-anget.jpg", price: 10000},
      { id: 4, name: "Teh Manis Dingin",img: "teh-manis-dingin.jpg", price: 10000},
      { id: 5, name: "Kopi Hitam",img: "kopi-hitam.jpeg", price: 10000},
      { id: 6, name: "Jus Alpukat",img: "jus-alpukat.jpg", price: 18000},
      { id: 7, name: "Jus Jambu",img: "jus-jambu.jpg", price: 18000},
      { id: 8, name: "Jus Mangga",img: "jus-mangga.jpg", price: 18000},
      { id: 9, name: "Jus Jeruk",img: "jus-jeruk.jpg", price: 15000},
    ]
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
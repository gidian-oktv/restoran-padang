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

// Fungsi WhatsApp
document.addEventListener('DOMContentLoaded', function() {
  console.log('Website Rumah Makan Padang Sederhana Siap!');

  const waButton = document.getElementById('wa-btn');
  waButton.addEventListener('click', function() {
      const name = document.getElementById('name-wa').value;
      const hp = document.getElementById('hp-wa').value;
      const pesanan = document.getElementById('pesanan').value;
      const address = document.getElementById('address-wa').value;

      if (name && hp && pesanan && address) {
          const message = `Halo, saya ${name}.\nNomor HP : ${hp} \nSaya ingin memesan:\n${pesanan}\nAlamat pengiriman: ${address}`;
          const phoneNumber = '6285881322330'; 
          const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

          window.open(waLink, '_blank');
      } else {
          alert('Silakan lengkapi semua data pesanan.');
          
          document.getElementById('name-wa').focus();
          event.preventDefault();
        
      }
  });
});

// Alpine Data Start
document.addEventListener("alpine:init", () => {
  Alpine.data("ayam", () => ({
    items: [
      { id: 1, name: "Ayam Bakar", img: "ayam-bakar.jpg", price: 22000 },
      { id: 2, name: "Ayam Gulai", img: "ayam-gulai.jpe", price: 23000 },
      { id: 3, name: "Ayam Pop", img: "ayam-pop.jpg", price: 23000 },
      { id: 4, name: "Ayam Goreng", img: "ayam-goreng.jpeg", price: 20000 },
    ],
  }));

  Alpine.data("ikan", () => ({
    items: [
      { id: 1, name: "Kakap Gulai", img: "ikan-kakap.jpg", price: 30000 },
      { id: 2, name: "Bandeng Bakar", img: "bandeng-bakar.jpg", price: 23000 },
      {
        id: 3,
        name: "Kembung Goreng",
        img: "kembung-goreng.jpg",
        price: 20000,
      },
      { id: 4, name: "Kembung Bakar", img: "kembung-bakar.jpg", price: 23000 },
      { id: 5, name: "Cumi Gulai", img: "cumi-gulai.jpg", price: 27000 },
      { id: 6, name: "Udang Balado", img: "udang-balado.jpg", price: 25000 },
    ],
  }));

  Alpine.data("daging", () => ({
    items: [
      { id: 1, name: "Rendang", img: "rendang.jpg", price: 23000 },
      {
        id: 2,
        name: "Dendeng Balado",
        img: "dendeng-balado.jpg",
        price: 25000,
      },
      { id: 3, name: "Cincang Gulai", img: "gulai-cincang.jpg", price: 25000 },
      { id: 4, name: "Babat Gulai", img: "gulai-babat.jpg", price: 24000 },
      { id: 5, name: "Gulai Kikil", img: "gulai-kikil.jpg", price: 24000 },
    ],
  }));

  Alpine.data("tambahan", () => ({
    items: [
      { id: 1, name: "Nasi Putih", img: "nasi.jpeg", price: 8000 },
      {
        id: 2,
        name: "Ati Ampela Balado",
        img: "ati-ampela-balado.jpg",
        price: 11000,
      },
      { id: 3, name: "Sambal", img: "sambal.jpg", price: 5000 },
      { id: 4, name: "Telur Balado", img: "telur-balado.jpe", price: 8000 },
      { id: 5, name: "Sayur Asem", img: "sayur-asam.jpe", price: 12000 },
      { id: 6, name: "Perkedel", img: "perkedel.jpg", price: 5000 },
      { id: 7, name: "Kerupuk Kulit", img: "kerupuk-kulit.jpg", price: 10000 },
    ],
  }));

  Alpine.data("minuman", () => ({
    items: [
      { id: 1, name: "Aqua 330mL", img: "aqua.png", price: 8000 },
      { id: 2, name: "Teh Tawar", img: "teh-tawar.jpg", price: 8000 },
      {
        id: 3,
        name: "Teh Manis Panas",
        img: "teh-manis-anget.jpg",
        price: 10000,
      },
      {
        id: 4,
        name: "Teh Manis Dingin",
        img: "teh-manis-dingin.jpg",
        price: 10000,
      },
      { id: 5, name: "Kopi Hitam", img: "kopi-hitam.jpeg", price: 10000 },
      { id: 6, name: "Jus Alpukat", img: "jus-alpukat.jpg", price: 18000 },
      { id: 7, name: "Jus Jambu", img: "jus-jambu.jpg", price: 18000 },
      { id: 8, name: "Jus Mangga", img: "jus-mangga.jpg", price: 18000 },
      { id: 9, name: "Jus Jeruk", img: "jus-jeruk.jpg", price: 15000 },
    ],
  }));

  Alpine.data("paket", () => ({
    items: [
      {
        id: 1,
        name: "Paket Ayam",
        img: "paket-ayam.jpg",
        price: 48000,
        keterangan:
          "Nasi + Ayam Goreng/Bakar + Sayur + Sambal + Teh Manis Dingin/Anget/Air Putih ",
      },
      {
        id: 2,
        name: "Paket Ikan",
        img: "paket-ikan.jpg",
        price: 48000,
        keterangan:
          "Nasi + Ikan Kembung/Bandeng + Sayur + Sambal + Teh Manis Dingin/Anget/Air Putih",
      },
      {
        id: 3,
        name: "Paket Rendang",
        img: "paket-rendang.jpg",
        price: 50000,
        keterangan:
          "Nasi + Rendang + Sayur + Sambal + Teh Manis Dingin/Anget/Air Putih",
      },
      {
        id: 4,
        name: "Paket Anak",
        img: "paket-anak.jpg",
        price: 35000,
        keterangan:
          "Nasi 1/2 Porsi + Ayam/Ikan/Rendang + Sayur + Saos + Teh Manis Dingin/Anget/Air Putih",
      },
      {
        id: 5,
        name: "Paket Keluarga",
        img: "paket-keluarga.jpeg",
        price: 164000,
        keterangan:
          "(4 Porsi) Nasi + Ayam/Ikan/Rendang + Sayur + Sambal + Teh Manis Dingin/Anget/Air Putih",
      },
      {
        id: 6,
        name: "Paket Arisan",
        img: "paket-arisan.jpeg",
        price: 820000,
        keterangan:
          "(10 Porsi) Nasi + Ayam/Ikan/Rendang + Sayur + Kerupuk Kulit + Ati Ampela + Sambal + Teh Manis Dingin/Anget/Air Putih",
      },
    ],
  }));
});
// Alpine Data End

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

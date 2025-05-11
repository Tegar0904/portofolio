const portfolioItems = [
  {
    title: "Project Web Penjualan",
    image: "assets/gambar1.jpg",
    description: "Mengembangkan web penjualan design T-shirt dengan menggunakan teknologi html,css,javascript,sql dan php. "
  },
  {
    title: "T-shirt Design",
    image: "assets/gambar2.jpg",
    description: "Freelance dibidang Desain kaos streetwear menggunakan software Adobe Photoshop dengan target pasar United States ."
  },
  {
    title: "Banner Promosi",
    image: "assets/gambar3.jpg",
    description: "Mengerjakan beberapa project Banner digital promosi UMKM lokal,menggunakan Adobe Photoshop dan Canva."
  }
];

const grid = document.getElementById("portfolioGrid");

portfolioItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "portfolio-item";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <div class="content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;
  grid.appendChild(div);
});
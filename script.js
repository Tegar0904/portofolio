const portfolioData = {
  website: [
    {
      title: "BROSTUDIO – Web Penjualan Design T-Shirt",
      image: "assets/gambar1.jpg",
      description: "Website penjualan desain T-shirt berbasis PHP & MySQL dengan sistem dinamis, autentikasi user, dan admin panel untuk pengelolaan produk."
    },
    {
      title: "BROSTUDIO – Web E-commerce desain T-Shirt",
      image: "assets/gambar12.jpg",
      description: "Website Pencarian jasa desain T-shirt berbasis PHP & MySQL dengan sistem dinamis, autentikasi user."
    }
  ],
  design: [
    {
      title: "Banner Outlet Penjualan Buah",
      image: "assets/gambar3.jpg",
      description: "Visual dan branding dari outlet penjualan buah segar di desain dengan aplikasi Photoshop."
    },
    {
      title: "Desain Kaos Bootleg Fighter UFC",
      image: "assets/gambar4.jpg",
      description: "Client seorang Fighter UFC yang ingin menjual merchendise, via paltform fiverr."
    },
    {
      title: "Desain Kaos Bootleg Fighter UFC",
      image: "assets/gambar5.jpg",
      description: "Client didapat dari platform fiverr, desain digunakan untuk pemakaian sendiri."
    },
    {
      title: "Desain Kaos Bootleg Persib Bandung",
      image: "assets/gambar6.jpg",
      description: "Client merupakan warga bandung yang ingin mencetak kaos club bola kebanggaannya, client didapat dari Facebook."
    },
    {
      title: "Desain Kaos Bootleg Persib Bandung",
      image: "assets/gambar7.jpg",
      description: "Client merupakan warga bandung yang ingin mencetak kaos club bola kebanggaannya, karena kepercayaan client sudah lebih memesan dari 1 kali."
    },
    {
      title: "Desain Bendera arak-arakan wisuda",
      image: "assets/gambar8.jpg",
      description: "Desain dibuat untuk pemakaian bendera pada arak arakan wisuda jurusan Teknik Komputer Universitas Andalas."
    },
    {
      title: "Desain Logo",
      image: "assets/gambar9.jpg",
      description: "Desain Logo untuk sebuah grup kelas pada sekolah SMA."
    },
    {
      title: "Desain Kaos Streetwear",
      image: "assets/gambar10.jpg",
      description: "Desain untuk pemakaian pribadi, client ditemukan pada platform fiverr."
    },
    {
      title: "Banner Promosi UMKM",
      image: "assets/gambar11.jpg",
      description: "Desain spanduk pada Dapoer Mama Ayang di padang."
    }
  ]
};

const grid = document.getElementById("portfolioGrid");

function renderSection(title, items){
  const titleEl = document.createElement("div");
  titleEl.className = "section-title";
  titleEl.textContent = title;

  const wrapper = document.createElement("div");
  wrapper.className = "portfolio-wrapper";

  items.forEach(item=>{
    const card = document.createElement("div");
    card.className = "portfolio-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="portfolio-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    wrapper.appendChild(card);
  });

  grid.appendChild(titleEl);
  grid.appendChild(wrapper);
}

renderSection("Website Projects", portfolioData.website);
renderSection("Graphic Design Projects", portfolioData.design);

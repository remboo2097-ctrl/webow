const produkList = [
  {
    title: "Website Toko Online",
    deskripsi: "Fitur keranjang, pembayaran, dan admin dashboard.",
    harga: "Rp 25.000",
    link: "https://wa.me/6283844641151?text=Halo, saya ingin pesan Website Toko Online."
  },
  {
    title: "Website Sekolah",
    deskripsi: "Halaman info sekolah, PPDB online, dan berita.",
    harga: "Rp 30.000",
    link: "https://wa.me/6283844641151?text=Halo, saya ingin pesan Website Sekolah."
  },
  {
    title: "Website Portofolio",
    deskripsi: "Tampilkan karya dan profil profesional Anda.",
    harga: "Rp 20.000",
    link: "https://wa.me/6283844641151?text=Halo, saya ingin pesan Website Portofolio."
  }
];

const Produk = () => (
  <section id="produk" className="py-12 text-center px-4">
    <h2 className="text-2xl font-semibold mb-8">Paket Website</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {produkList.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-2">{item.deskripsi}</p>
          <p className="font-semibold mb-3">{item.harga}</p>
          <a href={item.link} className="bg-gray-800 text-white px-4 py-2 rounded-md">Pesan</a>
        </div>
      ))}
    </div>
  </section>
)

export default Produk

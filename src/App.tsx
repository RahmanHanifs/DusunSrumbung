import React from 'react';
import { MapPin, Users, Building, Phone, Mail, Clock, Star, Camera, TreePine, Factory, School, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">Dusun Srumbung</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#demographics" className="text-gray-600 hover:text-green-600 transition-colors">Demografi</a>
              <a href="#tourism" className="text-gray-600 hover:text-green-600 transition-colors">Wisata</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Selamat Datang di
              <span className="text-green-600 block mt-2">Dusun Srumbung</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Desa yang asri dengan pemandangan pegunungan yang indah, masyarakat yang ramah, dan potensi wisata yang luar biasa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Jelajahi Desa
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Tentang Dusun Srumbung</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dusun Srumbung adalah sebuah desa yang terletak di kaki pegunungan dengan luas wilayah 15 km² dan memiliki sejarah panjang sejak tahun 1850.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Sejarah & Visi</h4>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Dusun Srumbung didirikan pada tahun 1850 oleh sekelompok pendatang yang mencari kehidupan yang lebih baik. Nama "Makmur" dipilih sebagai harapan agar desa ini dapat berkembang dan memberikan kesejahteraan bagi semua warganya.
                  </p>
                  <p>
                    Dengan visi menjadi desa mandiri yang berkelanjutan, kami terus mengembangkan potensi lokal sambil melestarikan nilai-nilai tradisional dan lingkungan alam.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Misi Utama</h5>
                    <p className="text-sm text-green-700">Meningkatkan kesejahteraan masyarakat melalui pembangunan berkelanjutan</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Komitmen</h5>
                    <p className="text-sm text-blue-700">Melestarikan budaya lokal dan lingkungan alam untuk generasi mendatang</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-800">789</h5>
                    <p className="text-gray-600">Penduduk</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-800">249</h5>
                    <p className="text-gray-600">Rumah Tangga</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-800">15</h5>
                    <p className="text-gray-600">Km²</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-800">174</h5>
                    <p className="text-gray-600">Tahun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section id="demographics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Demografi Desa</h3>
              <p className="text-xl text-gray-600">Data statistik penduduk dan fasilitas di Dusun Srumbung</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <School className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">Pendidikan</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SD</span>
                    <span className="font-semibold">3 Sekolah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SMP</span>
                    <span className="font-semibold">2 Sekolah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SMA</span>
                    <span className="font-semibold">1 Sekolah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TK</span>
                    <span className="font-semibold">4 Sekolah</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">Kesehatan</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puskesmas</span>
                    <span className="font-semibold">1 Unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posyandu</span>
                    <span className="font-semibold">5 Unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Klinik</span>
                    <span className="font-semibold">3 Unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Apotek</span>
                    <span className="font-semibold">2 Unit</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Factory className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-800">Ekonomi</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pertanian</span>
                    <span className="font-semibold">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Perdagangan</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jasa</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lainnya</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section id="tourism" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Potensi Wisata</h3>
              <p className="text-xl text-gray-600">Destinasi menarik yang dapat Anda kunjungi di Dusun Srumbung</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Hutan Pinus</h4>
                <p className="text-gray-600 mb-4">Hutan pinus yang asri dengan jalur hiking dan spot foto yang instagramable</p>
                <div className="flex items-center text-sm text-green-700">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.8/5 rating</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Air Terjun Pelangi</h4>
                <p className="text-gray-600 mb-4">Air terjun setinggi 25 meter dengan pemandangan pelangi yang menakjubkan</p>
                <div className="flex items-center text-sm text-blue-700">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 rating</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Bukit Sunrise</h4>
                <p className="text-gray-600 mb-4">Bukit dengan pemandangan sunrise terbaik dan hamparan sawah yang luas</p>
                <div className="flex items-center text-sm text-purple-700">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.7/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Pemerintahan Desa</h3>
              <p className="text-xl text-gray-600">Struktur pemerintahan dan layanan yang tersedia</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6">Struktur Pemerintahan</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Kepala Desa</h5>
                        <p className="text-gray-600">Bapak Suharto, S.Sos</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Sekretaris Desa</h5>
                        <p className="text-gray-600">Ibu Siti Aminah, S.AP</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Bendahara</h5>
                        <p className="text-gray-600">Bapak Ahmad Fauzi, S.E</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6">Layanan Publik</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Surat Pengantar</span>
                      <span className="text-green-600 font-semibold">Tersedia</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Surat Keterangan Usaha</span>
                      <span className="text-green-600 font-semibold">Tersedia</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Surat Keterangan Domisili</span>
                      <span className="text-green-600 font-semibold">Tersedia</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Surat Keterangan Tidak Mampu</span>
                      <span className="text-green-600 font-semibold">Tersedia</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Pelayanan Administrasi Lainnya</span>
                      <span className="text-green-600 font-semibold">Tersedia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h3>
              <p className="text-xl text-gray-600">Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-8">Informasi Kontak</h4>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Alamat</h5>
                      <p className="text-gray-600">Jl. Raya Dusun Srumbung No. 123<br />Kec. Sukamaju, Kab. Sejahtera<br />Jawa Barat 40123</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Telepon</h5>
                      <p className="text-gray-600">(021) 1234-5678<br />0812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Email</h5>
                      <p className="text-gray-600">info@desamakmur.id<br />pelayanan@desamakmur.id</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Jam Operasional</h5>
                      <p className="text-gray-600">Senin - Jumat: 08:00 - 15:00<br />Sabtu: 08:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <TreePine className="h-8 w-8 text-green-400" />
                  <h5 className="text-2xl font-bold">Dusun Srumbung</h5>
                </div>
                <p className="text-gray-400 mb-4">
                  Desa yang asri dengan masyarakat yang ramah dan potensi wisata yang luar biasa. Bersama kita membangun desa yang lebih maju dan sejahtera.
                </p>
              </div>

              <div>
                <h6 className="font-semibold mb-4">Tautan Cepat</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-green-400 transition-colors">Beranda</a></li>
                  <li><a href="#about" className="hover:text-green-400 transition-colors">Tentang</a></li>
                  <li><a href="#demographics" className="hover:text-green-400 transition-colors">Demografi</a></li>
                  <li><a href="#tourism" className="hover:text-green-400 transition-colors">Wisata</a></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-4">Layanan</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-green-400 transition-colors">Administrasi</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Pelayanan Publik</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">Pariwisata</a></li>
                  <li><a href="#contact" className="hover:text-green-400 transition-colors">Kontak</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Dusun Srumbung. Semua hak dilindungi.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
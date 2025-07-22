import React, { useState } from 'react';
import { MapPin, Users, Building, Phone, Mail, Clock, Star, Camera, TreePine, Factory, School, Heart } from 'lucide-react';
import MapDusun from './MapDusun';
import LocationCard from './components/LocationCard';
import LocationPopup from './components/LocationPopup';
import AnimatedSection from './components/AnimatedSection';
import { locations } from './data/locations';
import type { Location, ContactInfo, DemographicData } from './types';

const App: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleLocationClick = (location: Location): void => {
    setSelectedLocation(location);
    setShowPopup(true);
  };

  const handleDirectionsClick = (location: Location): void => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      bg: 'bg-green-600',
      title: 'Alamat',
      content: 'Jl. Raya Dusun Srumbung No. 123\nKec. Sukamaju, Kab. Sejahtera\nJawa Barat 40123',
      delay: 'animate-stagger-1'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      bg: 'bg-blue-600',
      title: 'Telepon',
      content: '(021) 1234-5678\n0812-3456-7890',
      delay: 'animate-stagger-2'
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      bg: 'bg-purple-600',
      title: 'Email',
      content: 'info@Dusunmakmur.id\npelayanan@Dusunmakmur.id',
      delay: 'animate-stagger-3'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      bg: 'bg-orange-600',
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 15:00\nSabtu: 08:00 - 12:00',
      delay: 'animate-stagger-4'
    }
  ];

  const demographicStats: DemographicData[] = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      bg: 'bg-green-600',
      value: '789',
      label: 'Penduduk',
      delay: 'animate-stagger-1'
    },
    {
      icon: <Building className="w-8 h-8 text-white" />,
      bg: 'bg-blue-600',
      value: '249',
      label: 'Rumah Tangga',
      delay: 'animate-stagger-2'
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      bg: 'bg-purple-600',
      value: '15',
      label: 'Km²',
      delay: 'animate-stagger-3'
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      bg: 'bg-orange-600',
      value: '174',
      label: 'Tahun',
      delay: 'animate-stagger-4'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-stagger-1 {
          animation-delay: 0.15s;
        }

        .animate-stagger-2 {
          animation-delay: 0.3s;
        }

        .animate-stagger-3 {
          animation-delay: 0.45s;
        }

        .animate-stagger-4 {
          animation-delay: 0.6s;
        }

        .animate-stagger-5 {
          animation-delay: 0.75s;
        }

        .animate-stagger-6 {
          animation-delay: 0.9s;
        }

        .initial-hidden {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-text {
          background: linear-gradient(135deg, #2563eb 0%, #059669 50%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .floating-animation {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gradient-text {
          background: linear-gradient(135deg, #059669, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Enhanced smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Smooth transitions for all interactive elements */
        button, a, input, textarea {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Enhanced hover effects */
        button:hover, .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Smooth focus transitions */
        input:focus, textarea:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }
      `}</style>

      {/* Header */}
      <header className="glass-effect border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <AnimatedSection animation="fadeInLeft" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-600 floating-animation" />
              <h1 className="text-2xl font-bold gradient-text">Dusun Srumbung</h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Beranda</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Tentang</a>
              <a href="#demographics" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Demografi</a>
              <a href="#tourism" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Wisata</a>
              <a href="#location" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Lokasi</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105">Kontak</a>
            </AnimatedSection>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Selamat Datang di
              <span className="hero-text block mt-2">Dusun Srumbung</span>
            </AnimatedSection>
            <AnimatedSection delay={100} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Dusun yang asri dengan pemandangan pegunungan yang indah, masyarakat yang ramah, dan potensi wisata yang luar biasa
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                Jelajahi Dusun
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105">
                Pelajari Lebih Lanjut
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Tentang Dusun Srumbung</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dusun Srumbung adalah sebuah Dusun yang terletak di kaki pegunungan dengan luas wilayah 15 km² dan memiliki sejarah panjang sejak tahun 1850.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fadeInLeft">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Sejarah & Visi</h4>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Dusun Srumbung didirikan pada tahun 1850 oleh sekelompok pendatang yang mencari kehidupan yang lebih baik. Nama "Makmur" dipilih sebagai harapan agar Dusun ini dapat berkembang dan memberikan kesejahteraan bagi semua warganya.
                  </p>
                  <p>
                    Dengan visi menjadi Dusun mandiri yang berkelanjutan, kami terus mengembangkan potensi lokal sambil melestarikan nilai-nilai tradisional dan lingkungan alam.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-6 rounded-lg hover-lift">
                    <h5 className="font-semibold text-green-800 mb-2">Misi Utama</h5>
                    <p className="text-sm text-green-700">Meningkatkan kesejahteraan masyarakat melalui pembangunan berkelanjutan</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg hover-lift">
                    <h5 className="font-semibold text-blue-800 mb-2">Komitmen</h5>
                    <p className="text-sm text-blue-700">Melestarikan budaya lokal dan lingkungan alam untuk generasi mendatang</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-8">
                  {demographicStats.map((stat, index) => (
                    <AnimatedSection
                      key={index}
                      animation="scaleIn"
                      delay={index * 100}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4 hover-lift`}>
                        {stat.icon}
                      </div>
                      <h5 className="text-2xl font-bold text-gray-800">{stat.value}</h5>
                      <p className="text-gray-600">{stat.label}</p>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section id="demographics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Demografi Dusun</h3>
              <p className="text-xl text-gray-600">Data statistik penduduk dan fasilitas di Dusun Srumbung</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="slideInUp" delay={100} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <School className="w-8 h-8 text-blue-600 mr-3 floating-animation" />
                  <h4 className="text-xl font-semibold text-gray-800">Pendidikan</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'SD', value: '3 Sekolah' },
                    { label: 'SMP', value: '2 Sekolah' },
                    { label: 'SMA', value: '1 Sekolah' },
                    { label: 'TK', value: '4 Sekolah' }
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between transform hover:scale-105 transition-transform">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInUp" delay={200} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-600 mr-3 floating-animation" />
                  <h4 className="text-xl font-semibold text-gray-800">Kesehatan</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Puskesmas', value: '1 Unit' },
                    { label: 'Posyandu', value: '5 Unit' },
                    { label: 'Klinik', value: '3 Unit' },
                    { label: 'Apotek', value: '2 Unit' }
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between transform hover:scale-105 transition-transform">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInUp" delay={300} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <Factory className="w-8 h-8 text-green-600 mr-3 floating-animation" />
                  <h4 className="text-xl font-semibold text-gray-800">Ekonomi</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Pertanian', value: '60%' },
                    { label: 'Perdagangan', value: '25%' },
                    { label: 'Jasa', value: '10%' },
                    { label: 'Lainnya', value: '5%' }
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between transform hover:scale-105 transition-transform">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section id="tourism" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Potensi Wisata</h3>
              <p className="text-xl text-gray-600">Destinasi menarik yang dapat Anda kunjungi di Dusun Srumbung</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TreePine className="w-6 h-6 text-white" />,
                  bg: 'bg-green-600',
                  gradient: 'from-green-100 to-green-200',
                  title: 'Hutan Pinus',
                  description: 'Hutan pinus yang asri dengan jalur hiking dan spot foto yang instagramable',
                  rating: '4.8/5 rating',
                  color: 'text-green-700'
                },
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  bg: 'bg-blue-600',
                  gradient: 'from-blue-100 to-blue-200',
                  title: 'Air Terjun Pelangi',
                  description: 'Air terjun setinggi 25 meter dengan pemandangan pelangi yang menakjubkan',
                  rating: '4.9/5 rating',
                  color: 'text-blue-700'
                },
                {
                  icon: <Camera className="w-6 h-6 text-white" />,
                  bg: 'bg-purple-600',
                  gradient: 'from-purple-100 to-purple-200',
                  title: 'Bukit Sunrise',
                  description: 'Bukit dengan pemandangan sunrise terbaik dan hamparan sawah yang luas',
                  rating: '4.7/5 rating',
                  color: 'text-purple-700'
                }
              ].map((item, index) => (
                <AnimatedSection
                  key={item.title}
                  animation="scaleIn"
                  delay={index * 100}
                  className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover-lift`}
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-4 floating-animation`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className={`flex items-center text-sm ${item.color}`}>
                    <Star className="w-4 h-4 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section id="administration" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Pemerintahan Dusun</h3>
              <p className="text-xl text-gray-600">Struktur pemerintahan dan layanan yang tersedia</p>
            </AnimatedSection>

            <AnimatedSection animation="slideInUp" className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6">Struktur Pemerintahan</h4>
                  <div className="space-y-4">
                    {[
                      { icon: <Users className="w-6 h-6 text-white" />, bg: 'bg-green-600', title: 'Kepala Dusun', name: 'Bapak Suharto, S.Sos' },
                      { icon: <Building className="w-6 h-6 text-white" />, bg: 'bg-blue-600', title: 'Sekretaris Dusun', name: 'Ibu Siti Aminah, S.AP' },
                      { icon: <MapPin className="w-6 h-6 text-white" />, bg: 'bg-purple-600', title: 'Bendahara', name: 'Bapak Ahmad Fauzi, S.E' }
                    ].map((official) => (
                      <div key={official.title} className="flex items-center p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-all">
                        <div className={`w-12 h-12 ${official.bg} rounded-full flex items-center justify-center mr-4`}>
                          {official.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">{official.title}</h5>
                          <p className="text-gray-600">{official.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6">Layanan Publik</h4>
                  <div className="space-y-3">
                    {[
                      'Surat Pengantar',
                      'Surat Keterangan Usaha',
                      'Surat Keterangan Domisili',
                      'Surat Keterangan Tidak Mampu',
                      'Pelayanan Administrasi Lainnya'
                    ].map((service) => (
                      <AnimatedSection
                        key={service}
                        animation="fadeInRight"
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg transform hover:scale-105 transition-all"
                      >
                        <span className="text-gray-700">{service}</span>
                        <span className="text-green-600 font-semibold">Tersedia</span>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Lokasi Penting</h3>
              <p className="text-xl text-gray-600">Temukan lokasi-lokasi penting di Dusun Srumbung</p>
            </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <AnimatedSection animation="fadeInLeft">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Peta Dusun</h4>
                <div className="bg-gray-100 p-6 rounded-xl hover-lift">
                  <MapDusun />
                </div>
              </AnimatedSection>
              {/* Location List */}
              <AnimatedSection animation="fadeInRight">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Daftar Lokasi</h4>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onClick={handleLocationClick}
                      index={index}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Location Popup */}
      {selectedLocation && (
        <LocationPopup
          location={selectedLocation}
          isVisible={showPopup}
          onClose={() => setShowPopup(false)}
          onDirections={handleDirectionsClick}
        />
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">Hubungi Kami</h3>
              <p className="text-xl text-gray-600">Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeInLeft">
                <h4 className="text-2xl font-semibold text-gray-800 mb-8">Informasi Kontak</h4>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <AnimatedSection
                      key={item.title}
                      animation="scaleIn"
                      className="flex items-start hover-lift"
                    >
                      <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mr-4 mt-1 floating-animation`}>
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">{item.title}</h5>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-400"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all hover:scale-105">
                    Kirim Pesan
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <AnimatedSection className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <TreePine className="h-8 w-8 text-green-400 floating-animation" />
                  <h5 className="text-2xl font-bold">Dusun Srumbung</h5>
                </div>
                <p className="text-gray-400 mb-4">
                  Dusun yang asri dengan masyarakat yang ramah dan potensi wisata yang luar biasa. Bersama kita membangun Dusun yang lebih maju dan sejahtera.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h6 className="font-semibold mb-4">Tautan Cepat</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Beranda</a></li>
                  <li><a href="#about" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Tentang</a></li>
                  <li><a href="#demographics" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Demografi</a></li>
                  <li><a href="#tourism" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Wisata</a></li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <h6 className="font-semibold mb-4">Layanan</h6>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Administrasi</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Pelayanan Publik</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Pariwisata</a></li>
                  <li><a href="#contact" className="hover:text-green-400 transition-colors hover:scale-105 inline-block">Kontak</a></li>
                </ul>
              </AnimatedSection>
            </div>
            <AnimatedSection className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <span className="xyz">
                {new Date().getFullYear()}
              </span>
            </AnimatedSection>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
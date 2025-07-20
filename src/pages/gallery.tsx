import { useState } from 'react';
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(8); // jumlah awal gambar

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // tambah 4 gambar setiap klik
  };

  return (
    <>
      <Navbar />
      <section id="sub-hero" className="bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Galeri GPN</h2>
          </div>
          <p className="text-lg font-medium mb-0">Dokumentasi foto dari berbagai kegiatan Gerakan Pemuda Natuna yang penuh aksi dan inspirasi</p>
        </div>
      </section>
      <section id='img-gallery' className='bg-white mb-16'>
        <div className='max-w-7xl mx-3 md:mx-auto'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(50)].slice(0, visibleCount).map((_, i) => (
              <a href="#" key={i} className="flex-shrink-0 w-full">
                <div className="bg-blue-100 hover:bg-blue-200 transform hover:scale-105 transition duration-200 ease-out rounded-lg overflow-hidden">
                  <img
                    src={`https://picsum.photos/300/200?random=${i}`}
                    alt={`Image ${i}`}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Tombol Load More */}
          {visibleCount < 50 && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="text-sm px-7 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Gallery;

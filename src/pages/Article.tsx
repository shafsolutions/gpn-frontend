
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';
import { useState } from 'react';

const Article = () => {
  const [visibleArticles, setVisibleArticles] = useState(8);
  const totalArticles = 12;

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 4);
  };

  return (
    <>
      <Navbar />
      <section id="sub-hero" className="bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Artikel & Berita</h2>
          </div>
          <p className="text-lg font-medium mb-0">Beragam artikel dan berita tentang kegiatan, opini, dan jejak langkah GPN di berbagai penjuru Natuna</p>
        </div>
      </section>
      <section id='list-article' className='bg-white mb-16'>
        <div className='max-w-7xl mx-3 md:mx-auto'>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(visibleArticles)].map((_, i) => (
              <a href="" key={i} className='w-fit'>
              <div className='bg-stone-100 hover:bg-stone-200 scale-100 hover:scale-102 duration-200 ease-out rounded-lg w-[300px] overflow-auto'>
                <img src={`https://picsum.photos/300/200?random=${i}`} alt={`Image ${i}`} className='w-full h-[200px] object-cover' />
                <div className='flex flex-col gap-3 px-4 py-5'>
                  <small className='text-xs flex items-center justify-end gap-1 text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#99a1af" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                    105
                  </small>
                  <h4 className='text-[18px] text-green-600 font-semibold'>Pemuda Natuna Gelar Pelatihan Kewirausahaan Digital</h4>
                  <hr className='text-gray-200' />
                  <div className='flex items-center justify-between'>
                    <p className="text-[16px] mb-0">5 Juli 2025</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                  </div>
                </div>
              </div>
            </a>
            ))}
          </div>

          {visibleArticles < totalArticles && (
            <div className='flex justify-center mt-8'>
              <button
                onClick={loadMoreArticles}
                className='px-7 py-3 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition'
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

export default Article;

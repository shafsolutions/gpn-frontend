
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import AnimatedNumber from '../assets/components/AnimatedNumber';
import Cta from '../assets/components/Cta';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='bg-primary-gradient py-24 md:py-42'>
        <div className="max-w-7xl h-fit mx-3 md:mx-auto md:h-[520px] flex items-center">
          <div className='grid grid-cols-1 md:grid-cols-5 items-center'>
            <div className='col-span-3'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-[48px] md:text-[64px] font-bold text-slate-800 leading-12 md:leading-16'>Suara Muda dari Ujung Utara Indonesia</h1>
                <p>Kami bukan sekadar organisasi, kami adalah gerakan. <br />Bergabunglah, dan jadi bagian dari perubahan</p>
                <div className='flex flex-col md:flex-row items-start  gap-2'>
                  <a href="" className='w-fit text-nowrap flex items-center gap-2 bg-green-600 px-7 py-3 rounded-full hover:bg-green-700 text-sm text-white'>Gabung sekarang
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path></svg>
                  </a>
                  <a href="" className='w-fit text-nowrap flex items-center gap-2 text-white bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm'>Lihat lebih banyak
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='fill-white' viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <img src="/public/assets/media/svg/natuna-vektor.png" alt="" className='w-full' />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Tentang Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="bg-slate-200 rounded-lg overflow-auto">
              <img src="https://picsum.photos/300/200?random=${i}" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-6">
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className='text-[32px] md:text-[48px] font-bold leading-12 md:leading-16'>Dari Pemuda, Oleh Pemuda, Untuk Natuna</h3>
                <p className='text-lg'>GPN bukan hanya organisasi, kami adalah gerakan. Kami adalah suara dari generasi muda yang ingin melihat Natuna tumbuh secara adil, inklusif, dan berkelanjutan</p>
              </div>
              <a href="" className='w-fit text-nowrap flex items-center gap-2 bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm text-white'>Kenali lebih dekat
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="data" className="bg-green-600 py-16">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent-green text-white text-[24px] md:text-[32px] font-bold'>Data Statistik</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-orange-400' viewBox="0 0 256 256"><path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"></path></svg>
              <div className='flex flex-col'>
                <h3 className='text-[32px] font-bold'>
                  <AnimatedNumber target={17} />
                </h3>
                <p className="text-lg mb-0">Kecamatan</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-orange-400' viewBox="0 0 256 256"><path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"></path></svg>
              <div className='flex flex-col'>
                <h3 className='text-[32px] font-bold'>
                  <AnimatedNumber target={1250} />
                </h3>
                <p className="text-lg mb-0">Anggota Total</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-orange-400' viewBox="0 0 256 256"><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM184,75.64,128,118,72,76V40H184Z"></path></svg>
              <div className='flex flex-col'>
                <h3 className='text-[32px] font-bold'>
                  <AnimatedNumber target={315} />
                </h3>
                <p className="text-lg mb-0">Pendaftar Pending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='kecamatan' className='bg-lightgreen py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between">
            <div id='heading' className='relative'>
              <h2 className='accent text-[24px] md:text-[32px] font-bold'>Sebaran Organisasi GPN</h2>
            </div>
            <div>
              <a href="" className='text-nowrap flex items-center gap-2 bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm text-white'>Lihat lebih banyak
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
          <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="h-[380px] col-span-1 md:col-span-3 bg-green-500 rounded-lg overflow-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.262528614308!2d108.239700245641!3d3.999999835579161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ec6fc2ce9cc2a3%3A0x5d117d4612d1f817!2sKabupaten%20Natuna!5e1!3m2!1sid!2sid!4v1752715057264!5m2!1sid!2sid" className='w-full h-full' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <h3 className='text-xl font-semibold mb-2'>Kecamatan</h3>
              <div className="max-h-[320px] overflow-auto">
                {[...Array(10)].map((_, i) => (
                  <a href='' key={i}>
                    <div className='p-3 hover:bg-slate-100'>
                      <p className='font-medium mb-0'>Bunguran Timur</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id='gallery' className='bg-white py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between">
            <div id='heading' className='relative'>
              <h2 className='accent text-[24px] md:text-[32px] font-bold'>Galeri GPN</h2>
            </div>
            <div>
              <a href="" className='text-nowrap flex items-center gap-2 bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm text-white'>Lihat lebih banyak
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
          <div className="flex w-full overflow-x-auto space-x-4 px-4 py-4">
            {[...Array(5)].map((_, i) => (
              <a href="#" key={i} className="flex-shrink-0 w-[300px]">
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
        </div>
      </section>

      <section id='article' className='bg-white py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between">
            <div id='heading' className='relative'>
              <h2 className='accent text-[24px] md:text-[32px] font-bold'>Artikel & Berita Terkini</h2>
            </div>
            <div>
              <a href="" className='text-nowrap flex items-center gap-2 bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm text-white'>Lihat lebih banyak
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
          <div className="flex w-full overflow-x-auto space-x-4 px-4 py-4">
            {[...Array(4)].map((_, i) => (
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
        </div>
      </section>

      <section id='ads' className='h-[134px] bg-gray-300 flex items-center justify-center'>
        <p className="text-white text-center mb-0">Ads Here <br />970x90</p>
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default Home;

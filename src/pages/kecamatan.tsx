
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import AnimatedNumber from '../assets/components/AnimatedNumber';
import Cta from '../assets/components/Cta';

const Kecamatan = () => {
  return (
    <>
      <Navbar />
      <section id="sub-hero" className="bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Kecamatan</h2>
          </div>
          <p className="text-lg font-medium mb-0">Data sebaran anggota GPN berdasarkan kecamatan, dilengkapi peta interaktif dan statistik keaktifan</p>
        </div>
      </section>

      <section id="data" className="bg-blue-600 py-16">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent-blue text-white text-[24px] md:text-[32px] font-bold'>Data Statistik</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-yellow-400' viewBox="0 0 256 256"><path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"></path></svg>
              <div className='flex flex-col'>
                <h3 className='text-[32px] font-bold'>
                  <AnimatedNumber target={17} />
                </h3>
                <p className="text-lg mb-0">Kecamatan</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-yellow-400' viewBox="0 0 256 256"><path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"></path></svg>
              <div className='flex flex-col'>
                <h3 className='text-[32px] font-bold'>
                  <AnimatedNumber target={1250} />
                </h3>
                <p className="text-lg mb-0">Anggota Total</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center gap-4 scale-100 hover:scale-102 duration-200 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='fill-yellow-400' viewBox="0 0 256 256"><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM184,75.64,128,118,72,76V40H184Z"></path></svg>
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

      <section id='kecamatan' className='bg-lightblue py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between">
            <div id='heading' className='relative'>
              <h2 className='accent text-[24px] md:text-[32px] font-bold'>Sebaran Organisasi GPN</h2>
            </div>
            <div>
              <a href="" className='text-nowrap flex items-center gap-2 bg-blue-600 px-7 py-3 rounded-full hover:bg-blue-700 text-sm text-white'>Lihat lebih banyak
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
          <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="h-[380px] col-span-1 md:col-span-3 bg-blue-500 rounded-lg overflow-auto">
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

      <section id='anggota' className='bg-white py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Anggota GPN</h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {[...Array(12)].map((_, i) => (
            <div key={i} className='card-anggota flex flex-col gap-4'>
              <img src="https://picsum.photos/id/1/200/300" alt="" />
              <div className="flex items-center flex-col w-full">
                <h4 className='font-bold'>John Doe</h4>
                <p className="mb-0">Position</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default Kecamatan;

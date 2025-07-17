
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="sub-hero" className="bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Mari Terhubung dengan GPN</h2>
          </div>
          <p className="text-lg font-medium mb-0">Kami terbuka untuk semua pertanyaan, kolaborasi, maupun dukungan. Jangan ragu untuk menghubungi kami kapan saja kami akan dengan senang hati menyambut Anda</p>
        </div>
      </section>
      <section id='contact-us' className='pb-16'>
        <div className="max-w-7xl mx-3 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 bg-blue-200 h-[200px] md:h-[650px] rounded-lg overflow-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.262528614308!2d108.239700245641!3d3.999999835579161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ec6fc2ce9cc2a3%3A0x5d117d4612d1f817!2sKabupaten%20Natuna!5e1!3m2!1sid!2sid!4v1752758918902!5m2!1sid!2sid" className='w-full h-full' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col gap-4">
              <div className='bg-blue-600 p-4 md:p-8 rounded-lg grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                  <p className="text-white text-sm">helo@gpn.com</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 256 256"><path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path></svg>
                  <p className="text-white text-sm">08XXXXXXXXX</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
                  <p className="text-white text-center text-sm">Basecamp, <br />Natuna, Riau</p>
                </div>
              </div>
              <div className='bg-lightblue p-4 md:p-8 rounded-lg'>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nama anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tulis pesan anda di sini..."
                  ></textarea>
                </div>

                <div className="text-start">
                  <button className='text-nowrap flex items-center gap-2 bg-yellow-400 px-7 py-3 rounded-full hover:bg-yellow-500 text-sm'>Kirim Pesan
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" viewBox="0 0 256 256"><path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path></svg>
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Contact;

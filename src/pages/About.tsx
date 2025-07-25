import { useEffect } from 'react';

import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';

const Gallery = () => {
  useEffect(() => {
    document.title = "Tentang Kami | GPN"
  }, []);

  return (
    <>
      <Navbar />
      <section id="sub-hero" className="bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Gerakan Pemuda Natuna</h2>
          </div>
          <p className="text-lg font-medium mb-0">Mengenal lebih dekat siapa kami dan apa yang kami perjuangkan</p>
        </div>
      </section>

      <section className='max-w-7xl mx-3 md:mx-auto bg-green-100 rounded-lg'>
        <img src="https://picsum.photos/300/200?random=" alt="" className='w-full h-[350px] rounded-lg object-cover' />
      </section>

      <section className="bg-white py-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Tentang Kami</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='text-lg font-semibold text-orange-400'>Awal Mula Sebuah Gerakan</h3>
              Gerakan Pemuda Natuna (GPN) lahir dari kegelisahan dan semangat bersama sekelompok pemuda Natuna yang ingin menjawab tantangan zaman. Di tengah keterbatasan akses, keterisolasian wilayah, serta arus globalisasi yang kian cepat, GPN hadir sebagai wadah bagi pemuda untuk berkumpul, belajar, dan bergerak bersama membangun daerah.
              <br /><br />
              Didirikan pada tahun 20XX, GPN mulai menjalankan berbagai kegiatan seperti pelatihan kepemudaan, edukasi publik, aksi sosial, hingga kolaborasi dengan berbagai pihak. Seiring waktu, GPN berkembang menjadi organisasi pemuda yang dikenal aktif dan solutif, menjangkau hampir seluruh kecamatan di Natuna.
              <br /><br />
              Kini, GPN bukan sekadar organisasi tetapi simbol bahwa pemuda Natuna punya daya, gagasan, dan semangat untuk membangun daerahnya sendiri.
            </div>
            <div className='bg-lightgreen flex flex-col gap-4 p-4'>
              <div>
                <h3 className='text-lg font-semibold text-orange-400'>Visi</h3>
                Menjadi wadah penggerak pemuda Natuna yang aktif, mandiri, dan berdaya guna bagi pembangunan daerah dan bangsa.
              </div>
              <div>
                <h3 className='text-lg font-semibold text-orange-400'>Misi</h3>
                <ol className='list-decimal ps-5'>
                  <li>
                    Meningkatkan kapasitas dan potensi pemuda melalui pelatihan, pendidikan, dan pendampingan.
                  </li>
                  <li>
                    Mendorong partisipasi aktif pemuda dalam isu-isu sosial, lingkungan, dan ekonomi lokal.
                  </li>
                  <li>
                    Menjalin kolaborasi dengan instansi pemerintah, swasta, dan komunitas dalam kegiatan pembangunan.
                  </li>
                  <li>
                    Mengembangkan jaringan pemuda di seluruh kecamatan Natuna sebagai kekuatan sosial.
                  </li>
                  <li>
                    Menjadi penggerak inovasi dan perubahan melalui aksi nyata yang berdampak.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-gradient py-18">
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col gap-6 md:gap-8'>
          <div id='heading' className='relative'>
            <h2 className='accent text-[24px] md:text-[32px] font-bold'>Struktur Organisasi</h2>
          </div>
          <div className='relative w-full h-[800px]'>
            <div id="struktur-data">
              <div className="line-structure-first"></div>
              <div id='pembina' className='absolute z-[20] top-0 left-[50%] card-struktur-data flex items-center gap-3 translate-x-[-50%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Pembina</p>
                </div>
              </div>
              <div id='ketua' className='absolute z-[20] top-[15%] left-[50%] card-struktur-data flex items-center gap-3 translate-x-[-50%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Ketua Umum</p>
                </div>
              </div>

              <div className="line-structure-2"></div>
              <div id='sekretaris' className='absolute z-[20] top-[30%] left-[20%] card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Sekretaris</p>
                </div>
              </div>
              <div id='bendahara' className='absolute z-[20] top-[30%] right-[20%] card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Bendahara</p>
                </div>
              </div>

              <div id='wakil1' className='absolute z-[20] top-[45%] left-[20%] card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Wakil Ketua I</p>
                </div>
              </div>
              <div id='wakil2' className='absolute z-[20] top-[45%] right-[20%] card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Wakil Ketua II</p>
                </div>
              </div>

              <div className="line-structure-3"></div>
              <div className="line-structure-3-1"></div>
              <div className="line-structure-3-2"></div>
              <div className="line-structure-3-3"></div>
              <div className='absolute z-[20] top-[65%] left-[0%] flex gap-1'>
                <div id='bidorg' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Organisasi <br />dan Keanggotaan</p>
                  </div>
                </div>
                <div id='bidkes' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Kesehatan</p>
                  </div>
                </div>
                <div id='bidmas' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Humas dan <br />Dokumentasi</p>
                  </div>
                </div>
              </div>

              <div className='absolute z-[20] top-[65%] right-[0%] flex gap-1'>
                <div id='bidrus' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Kewirausahaan</p>
                  </div>
                </div>
                <div id='bidgam' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Keagamaan</p>
                  </div>
                </div>
                <div id='bidorg' className='card-struktur-data flex items-center gap-3 translate-x-[0%] translate-y-[0%]'>
                  <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                  <div className='flex flex-col gap-0'>
                    <h4 className='text-sm font-semibold'>John Doe</h4>
                    <p className='text-xs'>Bidang Olahraga <br />dan Seni Budaya</p>
                  </div>
                </div>
              </div>

              <div id='ketua' className='absolute z-[20] top-[85%] left-[50%] card-struktur-data flex items-center gap-3 translate-x-[-50%] translate-y-[0%]'>
                <img src="https://picsum.photos/300/200?random=" alt="" className='w-[70px] h-[70px] rounded-md' />
                <div className='flex flex-col gap-0'>
                  <h4 className='text-sm font-semibold'>John Doe</h4>
                  <p className='text-xs'>Anggota</p>
                </div>
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

export default Gallery;
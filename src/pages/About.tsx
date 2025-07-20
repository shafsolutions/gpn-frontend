
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';

const Gallery = () => {
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

      <section className='max-w-7xl mx-3 md:mx-auto'>
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
          <div className='h-[400px]'>
            struktur data
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Gallery;
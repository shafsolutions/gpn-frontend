import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import Cta from '../assets/components/Cta';

const About = () => {
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

      <Cta />
      <Footer />
    </>
  );
};

export default About;

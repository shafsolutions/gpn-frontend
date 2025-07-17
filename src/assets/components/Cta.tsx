const Cta = () => {
  return (
    <>
      <section id="cta" className='bg-blue-primary py-16'>
        <div className='max-w-7xl mx-3 md:mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 justify-between'>
          <div className='flex flex-col'>
            <h3 className='text-white text-[48px] font-bold'>Mari Terhubung dengan GPN</h3>
            <p className="text-white text-base mb-0">Kami terbuka untuk semua pertanyaan, kolaborasi, maupun dukungan. Jangan ragu untuk menghubungi <br />kami kapan saja kami akan dengan senang hati menyambut Anda</p>
          </div>
          <div className='w-fit'>
            <a href="" className='text-nowrap flex items-center gap-2 bg-yellow-400 px-7 py-3 rounded-full hover:bg-yellow-500 text-sm'>Hubungi Kami
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" viewBox="0 0 256 256"><path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-8 md:gap-0">
          <div className='flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0'>
            <img src="./assets/media/img/logo-gerakan-pemuda-natuna.png" alt="" className='w-[30px] md:w-[50px] mb-3' />
            <p className="text-xs text-gray-500 mb-0">Gerakan Pemuda Natuna adalah <br />ruang kolaborasi untuk membawa <br />perubahan nyata bagi daerah <br />tercinta, Natuna</p>
          </div>

          <ul className="flex flex-col md:flex-row items-center gap-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-orange-400 text-sm">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-orange-400 text-sm">Kecamatan</a></li>
            <li><a href="#" className="hover:text-orange-400 text-sm">Galeri</a></li>
            <li><a href="#" className="hover:text-orange-400 text-sm">Artikel</a></li>
            <li><a href="#" className="hover:text-orange-400 text-sm">Hubungi Kami</a></li>
          </ul>

          <div className="flex flex-col gap-2 items-center md:items-end">
            <p className='text-sm font-medium text-gray-700 m-0'>Media Sosial</p>
            <div className='flex align-items-center justify-end gap-4'>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E42173" viewBox="0 0 256 256"><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F50D0D" viewBox="0 0 256 256"><path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path></svg>
              </a>
            </div>
            <a href="" className='flex items-center gap-2 bg-orange-400 text-white px-7 py-3 rounded-full hover:bg-orange-500 text-sm'>
              Gabung GPN 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-white" viewBox="0 0 256 256"><path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path></svg>
            </a>
          </div>
        </div>
        <div className='py-2 bg-gray-50 text-gray-400 text-center text-xs font-base'>
          Gerakan Pemuda Natuna © 2025
        </div>
      </footer>
    </>
  );
};

export default Footer;

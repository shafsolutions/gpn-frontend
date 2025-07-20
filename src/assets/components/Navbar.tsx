import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-99 w-full px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href='/' className="text-xl font-bold text-gray-800">
            <img src="./assets/media/img/logo-gerakan-pemuda-natuna.png" alt="" className='w-[40px] md:w-[60px]' />
          </a>

          {/* Menu Desktop */}
          <div className="flex gap-12">
            <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
              <li>
                <NavLink
                  to="/tentang-kami"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                  }
                >
                  Tentang Kami
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kecamatan"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                  }
                >
                  Kecamatan
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/galeri"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                  }
                >
                  Galeri
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/artikel"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                  }
                >
                  Artikel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hubungi-kami"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                  }
                >
                  Hubungi Kami
                </NavLink>
              </li>
            </ul>

            <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
              <li><a href="/masuk" className="hover:text-orange-400 text-sm">Masuk</a></li>
              <li><a href="/daftar" className="text-white bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-500 text-sm">Daftar</a></li>
            </ul>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with smooth transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col mt-4 space-y-4 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/tentang-kami"
                className={({ isActive }) =>
                  isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                }
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kecamatan"
                className={({ isActive }) =>
                  isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                }
              >
                Kecamatan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galeri"
                className={({ isActive }) =>
                  isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                }
              >
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artikel"
                className={({ isActive }) =>
                  isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                }
              >
                Artikel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hubungi-kami"
                className={({ isActive }) =>
                  isActive ? 'text-orange-400 text-sm' : 'hover:text-orange-400 text-sm'
                }
              >
                Hubungi Kami
              </NavLink>
            </li>
            <li><a href="/masuk" className="hover:text-orange-400 text-sm">Masuk</a></li>
            <li><a href="/daftar" className="hover:text-orange-400 text-sm">Daftar</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

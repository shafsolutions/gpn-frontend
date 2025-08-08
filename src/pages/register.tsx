import { useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    document.title = "Daftar | GPN";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-gradient px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 w-full max-w-7xl">
        <div className="text-center md:text-left flex flex-col items-center gap-3">
          <img
            src="/assets/media/img/logo-gerakan-pemuda-natuna.png"
            alt="Logo GPN"
            className="w-40 md:w-[512px] mx-auto md:mx-0"
          />
          <p className="text-sm md:text-lg text-center font-semibold text-gray-700 max-w-md">
            Gerakan Pemuda Natuna adalah ruang kolaborasi untuk membawa perubahan nyata bagi daerah tercinta, Natuna
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-lg">
          <div className="bg-white shadow-md rounded-xl px-6 py-8 md:px-10 md:py-12">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
              Daftar GPN
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">

                <div>
                  <label htmlFor="longname" className="block text-sm font-semibold text-gray-700 mb-1">
                    Nama Panjang
                  </label>
                  <input
                    type="text"
                    id="longname"
                    className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="photo" className="block text-sm font-semibold text-gray-700 mb-1">
                      Upload Foto
                    </label>
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      className="w-full bg-gray-100 border border-gray-300 rounded-md text-sm px-4 py-2 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="ktp" className="block text-sm font-semibold text-gray-700 mb-1">
                      Upload KTP
                    </label>
                    <input
                      type="file"
                      id="ktp"
                      accept="image/*,application/pdf"
                      className="w-full bg-gray-100 border border-gray-300 rounded-md text-sm px-4 py-2 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label htmlFor="retype-password" className="block text-sm font-semibold text-gray-700 mb-1">
                    Re-type Password
                  </label>
                  <input
                    type="retype-password"
                    id="retype-password"
                    className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full font-semibold"
              >
                Masuk
              </button>
            </form>
          </div>

          <div className="text-center mt-4">
            <Link to="/masuk" className="text-sm text-gray-600 font-semibold">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

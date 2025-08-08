import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
      document.title = "Masuk | GPN"
    }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-primary-gradient px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 w-full max-w-7xl">
          <div className="text-center md:text-left flex flex-col items-center gap-3">
            <img
              src="assets\media\img\logo-gerakan-pemuda-natuna.png"
              alt="Logo GPN"
              className="w-40 md:w-[512px] mx-auto md:mx-0"
            />
            <p className="text-sm md:text-lg text-center font-semibold text-gray-700 max-w-md mx-auto md:mx-0">
              Gerakan Pemuda Natuna adalah ruang kolaborasi untuk membawa perubahan nyata bagi daerah tercinta, Natuna
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-md">
            <div className="bg-white shadow-md rounded-xl px-6 py-8 md:px-10 md:py-12">
              <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
                Selamat Datang
              </h2>
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <div className="text-right mt-1">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-orange-500 hover:underline"
                    >
                      Lupa password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full font-semibold"
                >
                  Masuk
                </button>
                <a href="/daftar"
                  className="flex items-center justify-center w-full border border-gray-200 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Daftar
                </a>
              </form>
            </div>
            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-gray-600 font-semibold">
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

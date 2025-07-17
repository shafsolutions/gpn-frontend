import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Kecamatan from "../pages/kecamatan";
import Gallery from "../pages/gallery";
import NotFound from "../pages/not-found";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Article from "../pages/Article";
import Login from "../pages/login";
import Register from "../pages/register";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tentang-kami",
    element: <About />,
  },
  {
    path: "/kecamatan",
    element: <Kecamatan />,
  },
  {
    path: "/galeri",
    element: <Gallery />,
  },
  {
    path: "/artikel",
    element: <Article />,
  },
  {
    path: "/hubungi-kami",
    element: <Contact />,
  },
  {
    path: "/masuk",
    element: <Login />,
  },
  {
    path: "/daftar",
    element: <Register />,
  },
  {
    path: "*", // ✅ Tangkap semua yang tidak cocok
    element: <NotFound />,
  },
]);

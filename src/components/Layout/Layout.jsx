import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </Suspense>
  );
}

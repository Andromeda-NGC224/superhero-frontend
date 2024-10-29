import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
}

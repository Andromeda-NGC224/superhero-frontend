import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import HeroesCatalogPage from "../../pages/HeroesCatalogPage/HeroesCatalogPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import HeroesDetailPage from "../../pages/HeroesDetailPage/HeroesDetailPage.jsx";

import "./App.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/superheroes" element={<HeroesCatalogPage />}></Route>
        <Route path="/superheroes/:id" element={<HeroesDetailPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
  );
}

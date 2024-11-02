import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const HeroesCatalogPage = lazy(() =>
  import("../../pages/HeroesCatalogPage/HeroesCatalogPage")
);
const HeroesDetailPage = lazy(() =>
  import("../../pages/HeroesDetailPage/HeroesDetailPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

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

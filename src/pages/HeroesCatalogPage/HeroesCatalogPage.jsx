import { useDispatch } from "react-redux";
import Discover from "../../components/Discover/Discover.jsx";
import HeroesList from "../../components/HeroesList/HeroesList.jsx";
import css from "./HeroesCatalogPage.module.css";
import { useEffect } from "react";
import { fetchSuperheroes } from "../../redux/operations.js";
import { resetSuperheroes } from "../../redux/superheroesSlice.js";

export default function HeroesCatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSuperheroes());
    dispatch(fetchSuperheroes(1));
  }, [dispatch]);

  return (
    <div className={css.heroesCatalogContainer}>
      <Discover />
      <HeroesList />
    </div>
  );
}

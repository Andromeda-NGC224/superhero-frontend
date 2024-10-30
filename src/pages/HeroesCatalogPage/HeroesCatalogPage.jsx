import { useDispatch } from "react-redux";
import Discover from "../../components/Discover/Discover.jsx";
import HeroesList from "../../components/HeroesList/HeroesList.jsx";
import css from "./HeroesCatalogPage.module.css";
import { useEffect, useState } from "react";
import { fetchSuperheroes } from "../../redux/operations.js";
import { resetSuperheroes } from "../../redux/superheroesSlice.js";
import { ModalAddHero } from "../../components/ModalAddHero/ModalAddHero.jsx";

export default function HeroesCatalogPage() {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(resetSuperheroes());
    dispatch(fetchSuperheroes(1));
  }, [dispatch]);

  return (
    <div className={css.heroesCatalogContainer}>
      <Discover onModalOpen={handleModalOpen} />
      <HeroesList />
      {modalIsOpen && <ModalAddHero onModalClose={handleModalClose} />}
    </div>
  );
}

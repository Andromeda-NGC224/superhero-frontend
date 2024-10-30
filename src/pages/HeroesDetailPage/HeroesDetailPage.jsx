import { useParams } from "react-router-dom";
import css from "./HeroesDetailPage.module.css";

import { useEffect } from "react";
import { fetchOneSuperhero } from "../../redux/operations.js";
import { resetSuperheroes } from "../../redux/superheroesSlice.js";
import { useDispatch } from "react-redux";
import { HeroDetail } from "../../components/HeroDetail/HeroDetail.jsx";

export default function HeroesDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(resetSuperheroes());
    dispatch(fetchOneSuperhero(id));
  }, [dispatch, id]);

  return (
    <div className={css.heroesDetailContainer}>
      <HeroDetail />
    </div>
  );
}

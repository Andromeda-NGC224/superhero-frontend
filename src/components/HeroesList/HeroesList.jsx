import { useDispatch, useSelector } from "react-redux";
import css from "./HeroesList.module.css";
import {
  selectCurrentPage,
  selectHasNextPage,
  selectIsLoading,
  selectSuperheroes,
} from "../../redux/secectors.js";
import { fetchSuperheroes } from "../../redux/operations.js";

export default function HeroesList() {
  const dispatch = useDispatch();
  const superheroes = useSelector(selectSuperheroes);
  console.log(superheroes);

  const hasNextPage = useSelector(selectHasNextPage);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = () => {
    if (hasNextPage && !isLoading) {
      dispatch(fetchSuperheroes(currentPage + 1));
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>How It Works</h1>
      <p className={css.subtitle}>Find Out How To Get Started</p>
      <ul className={css.cards}>
        {superheroes.map((superhero) => (
          <li key={superhero._id} className={css.card}>
            <div className={css.iconContainer}>
              <img
                src={superhero.Images[0]}
                alt={superhero.nickname}
                className={css.icon}
              />
            </div>
            <h2 className={css.cardTitle}>{superhero.nickname}</h2>
            <p className={css.cardDescription}>{superhero.real_name}</p>
          </li>
        ))}
      </ul>
      {hasNextPage && <button onClick={loadMore}>Load More</button>}
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import css from "./HeroesList.module.css";
import {
  selectCurrentPage,
  selectError,
  selectHasNextPage,
  selectIsLoading,
  selectSuperheroes,
} from "../../redux/secectors.js";
import { fetchSuperheroes } from "../../redux/operations.js";
import { Link } from "react-router-dom";

export default function HeroesList() {
  const dispatch = useDispatch();
  const superheroes = useSelector(selectSuperheroes);
  const error = useSelector(selectError);

  const hasNextPage = useSelector(selectHasNextPage);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = async () => {
    if (hasNextPage && !isLoading) {
      await dispatch(fetchSuperheroes(currentPage + 1));
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Look at all kinds of heroes</h1>
      <p className={css.subtitle}>Find Out all the secrets of super people</p>
      <ul className={css.cards}>
        {superheroes.map((superhero) => (
          <li key={superhero._id}>
            <Link to={`/superheroes/${superhero._id}`} className={css.card}>
              <div className={css.imageContainer}>
                <img
                  src={superhero.Images[0]}
                  alt={superhero.nickname}
                  className={css.image}
                />
              </div>
              <div>
                <h2 className={css.cardTitle}>{superhero.nickname}</h2>
                <p className={css.cardDescription}>
                  {superhero.origin_description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {!superheroes && (
        <div className={css.error}>
          <h2>At the moment there are no heroes yet...</h2>
        </div>
      )}
      {error && (
        <div className={css.error}>
          <h2>At the moment there are no heroes yet...</h2>
        </div>
      )}

      {hasNextPage && (
        <button className={css.loadMore} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

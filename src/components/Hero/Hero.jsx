import { Link } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.heroContainer}>
        <h1 className={css.title}>
          Immerse yourself in a world of legendary heroes and inspiring feats!
        </h1>
        <h2 className={css.subtitle}>
          All about your favorite superheroes. Discover new facets of universes,
          get acquainted with the powers, abilities and secrets of heroes and
          villains!
        </h2>
        <Link to="/superheroes" className={css.button}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const NavLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <span className={css.logoDecor}></span>
        <Link to="/" className={css.logo}>
          <span className={css.logoPartTravel}>S</span>
          <span className={css.logoPartTrucks}>Heroes</span>
        </Link>
      </div>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={NavLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/superheroes" className={NavLinkStyle}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

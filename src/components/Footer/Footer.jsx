import { Link } from "react-router-dom";
import css from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const submitBtn = (e) => {
    e.preventDefault();
    toast("Thank you, we will contact you!", {
      icon: "👏",
    });
    setEmail("");
  };

  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.footerSection}>
          <div className={css.logoContainer}>
            <span className={css.logoDecor}></span>
            <Link to="/" className={css.logo}>
              <span className={css.logoPartTravel}>S</span>
              <span className={css.logoPartTrucks}>Heroes</span>
            </Link>
          </div>
          <p className={css.footerDescription}>
            Superheroes Assembly! Discover the unique interface of our Heroes
            Hub. Join the League!
          </p>
        </div>
        <div className={css.footerSection}>
          <h2 className={css.footerTitle}>My details, join me</h2>
          <ul className={css.footerLinks}>
            <li>
              <Link target="_blank" to="https://github.com/Andromeda-NGC224">
                <FaGithub className={css.icon} size={32} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/dmytro-shapoval/"
              >
                <FaLinkedin className={css.icon} size={32} />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://t.me/AndromedaNGC224">
                <FaTelegramPlane className={css.icon} size={32} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={css.footerSection}>
          <h2 className={css.footerTitle}>Join Our Weekly Digest</h2>
          <p className={css.footerDescription}>
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form className={css.footerForm} onSubmit={submitBtn}>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email here"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <p className={css.footerCopyright}>© SHeroes. All rights reserved.</p>
    </footer>
  );
}

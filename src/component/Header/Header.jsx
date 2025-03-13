// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Know<span>YourClothes</span>
      </Link>

      <nav className={styles.links}>
        <Link to="/problème" className={styles.link}>
          Problème
        </Link>
        <Link to="/solution" className={styles.link}>
          Solution
        </Link>
        <Link to="/blockchain" className={styles.link}>
          Blockchain supportée
        </Link>
        <Link to="/investisseurs" className={styles.link}>
          Investisseurs
        </Link>
        <Link to="/faq" className={styles.link}>
          FAQ
        </Link>
      </nav>

      <div className={styles.connexion}>
        <Link to="/marketplace" className={styles.market}>
          Marketplace
        </Link>
        <Link to="/login" className={styles.login}>
          Connexion wallet
        </Link>
      </div>
    </header>
  );
}

export default Header;

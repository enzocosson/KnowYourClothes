// src/components/Header.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const logo = useRef(null);
  const login = useRef(null);
  const signup = useRef(null);

  return (
    <header className={styles.header}>
      <a ref={logo} className={`${styles.logo}`} to="/">
        Know<span>YourClothes</span>
      </a>

      <div className={`${styles.links}`}>
        <a ref={login} to="/Problème" className={`${styles.link}`}>
          Problème
        </a>
        <a ref={login} to="/Solution" className={`${styles.link}`}>
          Solution
        </a>
        <a ref={login} to="/Solution" className={`${styles.link}`}>
          BlockChain supporté
        </a>
        <a ref={login} to="/Solution" className={`${styles.link}`}>
          Investisseurs
        </a>
        <a ref={login} to="/Solution" className={`${styles.link}`}>
          FAQ
        </a>
      </div>

      <div className={`${styles.connexion} connexion`}>
        <a ref={login} to="/login" className={`${styles.market} market`}>
          Market Place
        </a>
        <a ref={login} to="/login" className={`${styles.login} login`}>
          Connexion wallet
        </a>
      </div>
    </header>
  );
}

export default Header;

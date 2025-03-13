// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation de React Router
import Header from "./component/Header/Header";
import Home from "./component/Home/Home"; // Importation du composant Home
import Marketplace from "./component/MarketPlace/MarketPlace"; // Assure-toi d'avoir ce composant pour la route Marketplace
import styles from "./App.module.scss";

export const App = () => {
  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/marketplace" element={<Marketplace />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

// src/pages/MarketPlace.jsx
import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import Tshirt from "../../../T_shirt"; // Assurez-vous que ce chemin est correct
import styles from "./MarketPlace.module.scss"; // Assurez-vous que ce fichier existe ou ajustez-le

const MarketPlace = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInCircle, setIsMouseInCircle] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
  };

  const handleMouseEnter = () => setIsMouseInCircle(true);
  const handleMouseLeave = () => setIsMouseInCircle(false);

  const renderCard = (title, id) => {
    return (
      <div className={styles.card} key={id}>
        <div className={styles.cardCanvas}>
          <Canvas className={styles.canvas}>
            <directionalLight
              position={[5, 5, 5]}
              intensity={2}
              color="white"
            />
            <ambientLight intensity={1.0} color="white" />
            <pointLight position={[0, 5, 0]} intensity={4} color="white" />
            <EffectComposer disableNormalPass multisampling={false}>
              <SMAA />
            </EffectComposer>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              target={[0, 0, 0]}
              autoRotate={true}
              autoRotateSpeed={1}
            />
            <Tshirt scale={6} position={[0, -7, 0]} />
          </Canvas>
        </div>
        <div className={styles.cardInfo}>
          <h3>{title}</h3>
          <button className={styles.cardButton}>Voir plus</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.marketPlaceContainer}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Catégories</h2>
        <ul className={styles.sidebarLinks}>
          <li>
            <a href="#category1">T-shirts</a>
          </li>
          <li>
            <a href="#category2">Pantalons</a>
          </li>
          <li>
            <a href="#category3">Accessoires</a>
          </li>
        </ul>
      </div>

      {/* Right Content (Product Cards) */}
      <div className={styles.productList}>
        {renderCard("T-shirt design 1", 1)}
        {renderCard("T-shirt design 2", 2)}
        {renderCard("T-shirt design 3", 3)}
        {renderCard("T-shirt design 4", 4)}
        {renderCard("T-shirt design 5", 5)}
        {renderCard("T-shirt design 6", 6)}
      </div>

      {isMouseInCircle && (
        <div
          className={styles.cursorFollow}
          style={{
            left: `${cursorPos.x - 30}px`,
            top: `${cursorPos.y - 160}px`,
          }}
        >
          <img className={styles.cursorImage} src="/images/key.svg" alt="key" />
        </div>
      )}
    </div>
  );
};

export default MarketPlace;

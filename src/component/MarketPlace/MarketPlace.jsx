// src/pages/MarketPlace.jsx
import React, { useEffect, useState, useRef } from "react";
import styles from "./MarketPlace.module.scss"; // Assurez-vous que ce fichier existe ou ajustez-le
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import Tshirt from "../../../T_shirt"; // Assurez-vous que ce chemin est correct
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarketPlace = () => {
  const container__circle = useRef(null);
  const circle = useRef(null);
  const validation__circle = useRef(null);
  const tshirtRef = useRef(null);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInCircle, setIsMouseInCircle] = useState(false);
  const [isValidationActive, setIsValidationActive] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
  };

  const handleTshirtClick = () => {
    setIsValidationActive(true);
  };

  useEffect(() => {
    gsap.fromTo(
      [circle.current],
      { width: 800 },
      {
        width: 1500,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container__circle.current,
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play reset play reset",
        },
      }
    );
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.couverture}>
        <div className={styles.title}>
          <h1 className={styles.titre}>La Transparence, à portée de main</h1>
          <h2 className={styles.sous__titre}>
            Découvrez un nouveau standard de mode éthique et responsable grâce à
            la blockchain et à la crypto KYC.
          </h2>
        </div>
        <div
          ref={container__circle}
          className={styles.container__circle}
          onMouseEnter={() => setIsMouseInCircle(true)}
          onMouseLeave={() => setIsMouseInCircle(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            className={`${styles.lock} ${
              isValidationActive ? styles.lock__active : ""
            }`}
            src="/images/lock.png"
            alt=""
          />

          <div
            ref={validation__circle}
            className={`${styles.validation__circle} ${
              isValidationActive ? styles.active : ""
            }`}
          ></div>
          <Canvas className={styles.canvas__pochette}>
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
            <Tshirt
              ref={tshirtRef}
              scale={6}
              position={[0, -7, 0]}
              onClick={handleTshirtClick}
            />
          </Canvas>
          <img
            ref={circle}
            className={styles.circle}
            src="./images/circle.webp"
            alt=""
          />
        </div>
        {isMouseInCircle && (
          <div
            className={
              isValidationActive
                ? `${styles.cursorFollow} ${styles.cursorFollow__active}`
                : styles.cursorFollow
            }
            style={{
              left: `${cursorPos.x - 30}px`,
              top: `${cursorPos.y - 160}px`,
            }}
          >
            <img
              className={styles.verrouille}
              src="/images/key.svg"
              alt="key"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPlace;

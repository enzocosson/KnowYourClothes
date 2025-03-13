import React, { useEffect, useState, useRef } from "react";
import styles from "./App.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Header from "./component/Header/Header";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import Tshirt from "../T_shirt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const App = () => {
  const container__circle = useRef(null);
  const circle = useRef(null);
  const tshirtRef = useRef(null); // Référence pour le modèle Tshirt

  // État pour suivre la position de la souris
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInCircle, setIsMouseInCircle] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
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
      <Header />
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
            <Tshirt ref={tshirtRef} scale={6} position={[0, -7, 0]} />
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
            className={styles.cursorFollow}
            style={{
              left: `${cursorPos.x - 30}px`, // Ajuste la position du curseur
              top: `${cursorPos.y - 170}px`,
            }}
          >
            <img
              className={styles.verrouille}
              src="/images/key.svg"
              alt="key"
            />
          </div>
        )}
        {/* Curseur personnalisé */}
      </div>
    </div>
  );
};

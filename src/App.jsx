/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <div ref={container__circle} className={styles.container__circle}>
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
            />

            <Tshirt scale={6} position={[0, -7, 0]} />
          </Canvas>
          <img
            ref={circle}
            className={styles.circle}
            src="./images/circle.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

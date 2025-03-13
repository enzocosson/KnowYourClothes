import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./App.module.scss";
import { initializeCanvasP5 } from "./CanvasP5";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Header from "./component/Header/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EffectComposer,
  Vignette,
  Bloom,
  HueSaturation,
  SMAA,
} from "@react-three/postprocessing";
import Tshirt from "../T_shirt";

const App = () => {
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
        <div className={styles.container__circle}>
          <Canvas className={styles.canvas__pochette}>
            <directionalLight
              position={[5, 5, 5]}
              intensity={2}
              color="white"
            />
            <ambientLight intensity={1.0} color="white" />
            <pointLight position={[0, 5, 0]} intensity={4} color="white" />
            <EffectComposer disableNormalPass multisampling={false}>
              {/* <Bloom
                luminanceThreshold={0.1}
                radius={0.9}
                levels={3}
                intensity={1}
                mipmapBlur
              /> */}
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
          <img className={styles.circle} src="./images/circle.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;

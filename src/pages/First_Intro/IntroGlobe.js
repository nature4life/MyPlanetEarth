import React from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { useEffect, useRef } from  'react';
import clouds from'./clouds.png';
import nightsky from'./night-sky.png';



export function IntroGlobe() {

    const globeEl = useRef();

    useEffect(() => {
      const globe = globeEl.current;

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.35;

      // Add clouds sphere
      const CLOUDS_IMG_URL = clouds; // from https://github.com/turban/webgl-earth
      const CLOUDS_ALT = 0.004;
      const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

      new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
        const clouds = new THREE.Mesh(
          new THREE.SphereBufferGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
        );
        globe.scene().add(clouds);

        (function rotateClouds() {
          clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
          requestAnimationFrame(rotateClouds);
        })();
      });
    }, []);


    var today = new Date(),
    time = today.getHours();
   
     const currentTime = time;
    



  return (
      <>
      {console.log(currentTime)}
    <Globe
    ref={globeEl}
    animateIn={false}
    // backgroundImageUrl = "https://unpkg.com/three-globe@2.23.4/example/img/night-sky.png" 
    backgroundImageUrl = {nightsky}
    globeImageUrl= {currentTime < 18 ? "https://unpkg.com/three-globe@2.23.4/example/img/earth-night.jpg" :"https://unpkg.com/three-globe@2.23.4/example/img/earth-blue-marble.jpg"}
    bumpImageUrl="https://unpkg.com/three-globe@2.23.4/example/img/earth-topology.png"
  />
</>
  );
};
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import Link from "next/link";

const GlobeWithOrbitingWindows = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    camera.position.z = 5;

    // CSS Renderer
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    containerRef.current.appendChild(labelRenderer.domElement);

    // Globo
    const globeRadius = 2.1;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/world_map.jpg"),
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Ventanas que orbitan
    const orbitRadius = 3.5;
    const projects = [
      { name: "React", count: 12 },
      { name: "Node.js", count: 8 },
      { name: "Python", count: 15 },
      { name: "Java", count: 6 },
    ];

    const orbitObjects = [];
    projects.forEach((project, index) => {
      const element = document.createElement("div");
      element.style.width = "120px";
      element.style.height = "60px";
      element.style.backgroundColor = "#1f2937"; // gray-800
      element.style.color = "white";
      element.style.borderRadius = "8px";
      element.style.display = "flex";
      element.style.alignItems = "center";
      element.style.justifyContent = "center";
      element.style.position = "absolute";
      element.innerText = `${project.name}: ${project.count} Proyectos`;

      const cssObject = new CSS2DObject(element);
      const angle = (index / projects.length) * Math.PI * 2;
      cssObject.position.set(
        orbitRadius * Math.cos(angle),
        orbitRadius * Math.sin(angle),
        0
      );

      scene.add(cssObject);
      orbitObjects.push({ cssObject, angle });
    });

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      orbitObjects.forEach((obj) => {
        obj.angle += 0.01;
        obj.cssObject.position.set(
          orbitRadius * Math.cos(obj.angle),
          orbitRadius * Math.sin(obj.angle),
          0
        );
      });
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    // Redimensionar
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center w-full h-screen">
      <div className="w-full md:w-3/5 flex flex-col justify-center text-left space-y-5 pt-10 md:pt-20 px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-950 font-medium">
          Diseño, desarrollo<br />e implementación <br />de soluciones <br />tecnológicas
        </h1>
        <p className="max-w-xl text-base sm:text-lg md:text-xl">
          Obtén presencia en línea de primera clase y automatiza tus procesos
          internos con nuestras soluciones: Desarrollo Web • Desarrollo de Apps
          • Infraestructura • Soporte
        </p>
        <div className="flex flex-col md:flex-row items-center justify-start gap-x-3 font-medium text-sm">
          <Link
            href="/contact"
            className="menu block w-full md:w-auto font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-4 py-2 rounded-lg text-center"
          >
            Contáctanos Hoy
          </Link>
          <Link
            href="/servicesDet/appDev"
            className="menu block w-full md:w-auto font-medium text-gray-700 border bg-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg text-center mt-2 md:mt-0"
            scroll={false}
          >
            Leer Más
          </Link>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full md:w-2/5 flex justify-center items-center h-full"
      >
        <canvas ref={canvasRef} className="h-[80%] md:h-full" />
      </div>
    </div>
  );
};

export default GlobeWithOrbitingWindows;

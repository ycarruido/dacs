"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

const GlobeWithOrbitingWindows = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const globeRotation = useRef({ x: 0, y: 0 });
  const globeRotationSpeed = useRef(0.002); // Velocidad de rotación constante
  const globe = useRef(null); // Referencia para el globo

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    camera.position.z = 5;

    // Globo
    const globeRadius = 2.7;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/world_map.png"),
    });
    globe.current = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe.current);

    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Ventanas que orbitan
    const orbitRadius = 3;
    const projects = [
      { path: "/img/tools/angular.png", count: 1, name: "Angular" },
      { path: "/img/tools/dotnet.png", count: 8, name: ".NET" },
      { path: "/img/tools/nextjs.png", count: 7, name: "Next JS" },
      { path: "/img/tools/nodejs.png", count: 6, name: "Node JS" },
      { path: "/img/tools/react.png", count: 5, name: "React" },
      { path: "/img/tools/sharepoint.png", count: 4, name: "SharePoint" },
      { path: "/img/tools/tailwind.png", count: 3, name: "TailwindCss" },
      { path: "/img/tools/typescript.png", count: 2, name: "TypeScript" },
    ];
    const orbitObjects = [];
    projects.forEach((project, index) => {
      const planeGeometry = new THREE.PlaneGeometry(0.5, 0.5);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x4b5563,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      const angle = (index / projects.length) * Math.PI * 2;
      plane.position.set(
        0,
        orbitRadius * Math.sin(angle),
        orbitRadius * Math.cos(angle)
      );

      // Agregar texto con el conteo
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 128;
      canvas.height = 64;
      context.fillStyle = "rgba(75, 85, 99, 0.8)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      const img = new Image();
      img.src = project.path;
      img.onload = () => {
        context.drawImage(img, 10, 10, 45, 45);
        context.font = "12px Arial";
        context.fillStyle = "white";
        context.fillText(`${project.count})`, 60, 20);
        context.fillText(`${project.name} `, 60, 40);
        context.lineWidth = 2;
        context.strokeStyle = "white";
        context.strokeRect(0, 0, canvas.width, canvas.height);
        const textTexture = new THREE.CanvasTexture(canvas);
        const textMaterial = new THREE.SpriteMaterial({ map: textTexture });
        const textSprite = new THREE.Sprite(textMaterial);
        textSprite.scale.set(1.0, 0.5, 1);
        textSprite.position.set(0, 0, 0);
        plane.add(textSprite);
        scene.add(plane);
      };
      orbitObjects.push({ plane, angle });
    });

    // Funciones de manejo de eventos del mouse
    const onMouseDown = (event) => {
      isDragging.current = true;
      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    };
    const onMouseMove = (event) => {
      if (isDragging.current) {
        const deltaX = event.clientX - previousMousePosition.current.x;
        const deltaY = event.clientY - previousMousePosition.current.y;
        globe.current.rotation.y += deltaX * 0.01;
        globe.current.rotation.x -= deltaY * 0.01;
        previousMousePosition.current = { x: event.clientX, y: event.clientY };
      }
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };

    // Añadir eventos de mouse
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging.current) {
        globe.current.rotation.y += globeRotationSpeed.current;
      }
      orbitObjects.forEach((obj) => {
        obj.angle += 0.004;
        obj.plane.position.set(
          0,
          orbitRadius * Math.sin(obj.angle),
          orbitRadius * Math.cos(obj.angle)
        );
      });
      renderer.render(scene, camera);
    };
    animate();

    // Redimensionar
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden">
      {/* Sección de texto y botones */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:px-20 h-full">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl text-gray-950 font-medium pb-4">
          Diseño, desarrollo
          e implementación
          de soluciones
          tecnológicas
        </h1>
        <p className="max-w-xl text-lg sm:text-xl md:text-2xl text-justify pb-4">
          Obtén presencia en línea de primera clase y automatiza tus procesos
          internos con nuestras soluciones: Desarrollo Web • Desarrollo de Apps
          • Infraestructura • Soporte
        </p>
        <div className="flex flex-col md:flex-row items-center justify-start gap-x-3 font-medium text-sm">
          <Link
            href="/contact"
            className="block w-full md:w-auto font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-4 py-2 rounded-lg text-center"
          >
            Contáctanos Hoy
          </Link>
          <Link
            href="/servicesDet/appDev"
            className="block w-full md:w-auto font-medium text-gray-700 border bg-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg text-center mt-2 md:mt-0"
            scroll={false}
          >
            Leer Más
          </Link>
        </div>
      </div>
      {/* Sección de animación */}
      <div
        ref={containerRef}
        className="hidden md:flex w-full md:w-1/2 justify-center items-center h-full pb-10"
      >
        <canvas ref={canvasRef} className="h-[60%] md:h-full max-h-[500px]" />
      </div>
    </div>
  );
};

export default GlobeWithOrbitingWindows;

"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";

const GlobeWithOrbitingWindows = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const globeRotationSpeed = useRef(0.001);
  const globe = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  useEffect(() => {
    // Detectar si es móvil para responsive avanzado
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // No renderizamos animación en móvil

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    const resizeRenderer = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resizeRenderer();
    camera.position.z = 6; // Más lejos para animación inicial

    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Esfera-globo
    const globeRadius = 2;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/world_map.png"),
      roughness: 1,
      metalness: 0,
    });
    globe.current = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe.current);

    // Orbit Radius y objetos orbitantes
    const orbitRadius = 2.8;
    const projects = [
      { path: "/img/tools/angular.png", count: 1, name: "Angular", desc: "Ideal para apps empresariales modulares" },
      { path: "/img/tools/dotnet.png", count: 8, name: ".NET", desc: "Ideal para APIs REST y apps de escritorio" },
      { path: "/img/tools/nextjs.png", count: 7, name: "Next JS", desc: "Framework de React para producción" },
      { path: "/img/tools/nodejs.png", count: 6, name: "Node JS", desc: "Perfecto para APIs en tiempo real" },
      { path: "/img/tools/react.png", count: 5, name: "React", desc: "Popular para interfaces interactivas" },
      { path: "/img/tools/sharepoint.png", count: 4, name: "SharePoint", desc: "portales empresariales integrado con Microsoft 365" },
      { path: "/img/tools/tailwind.png", count: 3, name: "TailwindCss", desc: "Diseño de interfaces rápidas y limpias" },
      { path: "/img/tools/typescript.png", count: 2, name: "TypeScript", desc: "JS tipado para apps seguras y mantenibles" },
    ];

    const orbitObjects = [];

    // Helper para crear canvas con logo + texto para cada panel
const createPanelTexture = (project, callback) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 128;

  // Fondo con borde elegante
  ctx.fillStyle = "rgba(31, 41, 55, 0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#61dafb";
  ctx.lineWidth = 3;
  ctx.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);

  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  };

  // Cargar imagen logo
  const img = new Image();
  img.src = project.path;
  img.onload = () => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(16, 16, 64, 64);
    ctx.clip();
    ctx.drawImage(img, 16, 16, 64, 64);
    ctx.restore();

    // Texto con salto de línea
    ctx.font = "16px Arial";
    ctx.fillStyle = "#dbeafe";
    const maxWidth = canvas.width - 30;
    const lineHeight = 20;
    const x = 15;
    const y = 95;

    wrapText(ctx, project.desc, x, y, maxWidth, lineHeight);

    callback(new THREE.CanvasTexture(canvas));
  };
};


    projects.forEach((project, index) => {
      const planeGeometry = new THREE.PlaneGeometry(0.75, 0.4);
      createPanelTexture(project, (texture) => {
        const planeMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.95,
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);

        const angle = (index / projects.length) * Math.PI * 2;
        plane.position.set(
          orbitRadius * Math.sin(angle),
          0,
          orbitRadius * Math.cos(angle)
        );

        plane.userData = { name: project.name }; // Para tooltip

        scene.add(plane);
        orbitObjects.push({ plane, angle });
      });
    });

    // Animación inicial: cámara zoom in + giro globo
    let animProgress = 0;
    const animDuration = 150; // frames aprox

    const onMouseDown = (e) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
      setTooltip({ ...tooltip, visible: false });
    };
    const onMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;
        globe.current.rotation.y -= deltaX * 0.01;
        globe.current.rotation.x -= deltaY * 0.01;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      } else {
        // Tooltip detection
        const mouse = new THREE.Vector2();
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(
          orbitObjects.map((obj) => obj.plane)
        );
        if (intersects.length > 0) {
          const intersect = intersects[0];
          const name = intersect.object.userData.name || "";
          setTooltip({
            visible: true,
            x: e.clientX + 12,
            y: e.clientY + 12,
            text: name,
          });
        } else {
          setTooltip({ ...tooltip, visible: false });
        }
      }
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);

      // Animación entrada cámara zoom + globo gira suave
      if (animProgress < animDuration) {
        camera.position.z = 6 - (animProgress / animDuration) * 2; // De 6 a 4
        globe.current.rotation.y -= 0.01 * (1 - animProgress / animDuration);
        animProgress++;
      } else if (!isDragging.current) {
        globe.current.rotation.y -= globeRotationSpeed.current;
      }

      // Orbit panels giran
      orbitObjects.forEach((obj) => {
        obj.angle += 0.002;
        obj.plane.position.set(
          orbitRadius * Math.sin(obj.angle),
          0,
          orbitRadius * Math.cos(obj.angle)
        );
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      resizeRenderer();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden bg-gray-900">
      {/* Texto + CTA */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-20 h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4">
          Desarrollo y Consultoría IT <br />
          <span className="text-2xl md:text-4xl text-sky-400">
            a la medida de tus necesidades
          </span>
        </h1>
        <p className="mb-6 text-lg md:text-xl text-gray-300 max-w-lg">
          Más de 10 años creando aplicaciones web y móviles con tecnologías como
          React, .NET, Next.js, Angular y más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-6 py-3 bg-sky-700 hover:bg-sky-600 text-white font-semibold rounded-lg text-center shadow">
            Contáctanos Hoy
          </Link>
          <Link href="/servicesDet/appDev" className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center shadow hover:bg-gray-200">
            Leer Más
          </Link>
        </div>
      </div>

      {/* Canvas o fallback móvil */}
      <div
        ref={containerRef}
        className="relative w-full md:w-1/2 h-96 md:h-full bg-black flex justify-center items-center"
      >
        {isMobile ? (
          <div className="text-center px-4 text-gray-400">
            Animación 3D no disponible en dispositivos móviles.
          </div>
        ) : (
          <canvas ref={canvasRef} className="w-full h-full" />
        )}

        {/* Tooltip flotante */}
        {tooltip.visible && (
          <div
            ref={tooltipRef}
            className="pointer-events-none fixed bg-sky-700 text-white px-3 py-1 rounded-md text-sm font-medium select-none"
            style={{ top: tooltip.y, left: tooltip.x, zIndex: 9999 }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobeWithOrbitingWindows;

// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import Link from "next/link";
// import Hero from "../components/ui/Hero/Hero";

// const ParticleBanner = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [webglSupported, setWebglSupported] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );

//     let renderer;
//     try {
//       renderer = new THREE.WebGLRenderer({
//         canvas: canvasRef.current,
//         alpha: true,
//         antialias: true,
//       });
//     } catch (error) {
//       console.error("No se pudo crear el contexto WebGL:", error);
//       setWebglSupported(false);
//       return;
//     }

//     const resizeRenderer = () => {
//       const width = containerRef.current.clientWidth;
//       const height = containerRef.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     resizeRenderer();

//     camera.position.z = 5;

//     const particlesCount = 500;
//     const particles = new THREE.BufferGeometry();
//     const positions = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
//     }
//     particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     const particleMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 0.1, transparent: true });
//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     const textures = [
//       "/img/tools/angular.png",
//       "/img/tools/dotnet.png",
//       "/img/tools/nextjs.png",
//       "/img/tools/nodejs.png",
//       "/img/tools/react.png",
//       "/img/tools/sharepoint.png",
//       "/img/tools/tailwind.png",
//       "/img/tools/typescript.png",
//     ];

//     const logoTextures = textures.map((texturePath) => {
//       return new THREE.TextureLoader().load(texturePath);
//     });

//     const logoTexture = new THREE.TextureLoader().load("/img/DacsLogo.svg");
//     const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: false });
//     const logoSprite = new THREE.Sprite(logoMaterial);
//     logoSprite.scale.set(3, 1, 1);
//     logoSprite.position.set(0, 0, 0);
//     scene.add(logoSprite);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       particleSystem.rotation.y += 0.005;

//       for (let i = 0; i < particlesCount; i++) {
//         if (Math.random() < 0.0005) {
//           const logoIndex = Math.floor(Math.random() * logoTextures.length);
//           const logoTexture = logoTextures[logoIndex];
//           const spriteMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: true });
//           const sprite = new THREE.Sprite(spriteMaterial);
//           sprite.scale.set(0.5, 0.5, 1);
//           sprite.position.set(
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10
//           );
//           scene.add(sprite);
//           setTimeout(() => {
//             scene.remove(sprite);
//           }, 1000);
//         }
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       resizeRenderer();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden bg-gray-900">
//       <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-20 h-full">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4">
//           Desarrollo y Consultoría IT <br />
//           <span className="text-2xl md:text-4xl text-sky-400">
//             a la medida de tus necesidades
//           </span>
//         </h1>
//         <p className="mb-6 text-lg md:text-xl text-gray-300 max-w-lg">
//           Más de 10 años creando aplicaciones web y móviles con tecnologías como
//           React, .NET, Next.js, Angular y más.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/contact" className="px-6 py-3 bg-sky-700 hover:bg-sky-600 text-white font-semibold rounded-lg text-center shadow">
//             Contáctanos Hoy
//           </Link>
//           <Link href="/servicesDet/appDev" className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center shadow hover:bg-gray-200">
//             Leer Más
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={containerRef}
//         className="relative w-full md:w-1/2 h-96 md:h-full bg-black flex justify-center items-center"
//       >
//         {webglSupported ? (
//           <canvas ref={canvasRef} className="w-full h-full" />
//         ) : (
//           <div className="absolute text-white text-center px-6 py-4 bg-black/70 rounded z-10">
//             <Hero />
//             Tu navegador o equipo no puede cargar la animación 3D 😓 <br />
//             Prueba desde otro dispositivo o navegador actualizado.
//           </div>
//         )}
//         {tooltip.visible && (
//           <div
//             ref={tooltipRef}
//             className="pointer-events-none fixed bg-sky-700 text-white px-3 py-1 rounded-md text-sm font-medium select-none"
//             style={{ top: tooltip.y, left: tooltip.x, zIndex: 9999 }}
//           >
//             {tooltip.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ParticleBanner;






"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import Hero from "../components/ui/Hero/Hero";

const ParticleBanner = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
    } catch (error) {
      console.error("No se pudo crear el contexto WebGL:", error);
      setWebglSupported(false);
      return;
    }

    const resizeRenderer = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resizeRenderer();

    camera.position.z = 5;

    const particlesCount = 200;
    const textures = [
      "/img/tools/angular.png",
      "/img/tools/dotnet.png",
      "/img/tools/nextjs.png",
      "/img/tools/nodejs.png",
      "/img/tools/react.png",
      "/img/tools/sharepoint.png",
      "/img/tools/tailwind.png",
      "/img/tools/typescript.png",
    ];

    const binarySprites = [];
    const generateBinaryTexture = (text) => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(0, 170, 255, 1)";
        ctx.font = "bold 28px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      }
      return new THREE.CanvasTexture(canvas);
    };

    for (let i = 0; i < particlesCount; i++) {


      //const binaryText = Math.random() > 0.5 ? "0101" : "1010";
      
      const length = 5; // Puedes cambiar la longitud de la cadena binaria aquí
      const binaryText = generateRandomBinaryString(length);

      const material = new THREE.SpriteMaterial({
        map: generateBinaryTexture(binaryText),
        transparent: true,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      sprite.scale.set(0.5, 0.25, 1);
      scene.add(sprite);
      binarySprites.push(sprite);
    }

    const logoTextures = textures.map((texturePath) => {
      return new THREE.TextureLoader().load(texturePath);
    });

    const logoTexture = new THREE.TextureLoader().load("/img/DacsLogo.svg");
    const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: false });
    const logoSprite = new THREE.Sprite(logoMaterial);
    logoSprite.scale.set(3, 1, 1);
    logoSprite.position.set(0, 0, 0);
    scene.add(logoSprite);

    const animate = () => {
      requestAnimationFrame(animate);

      binarySprites.forEach((sprite) => {
        sprite.rotation.z += 0.002;
      });

      scene.rotation.y += 0.005;

      for (let i = 0; i < particlesCount; i++) {
        if (Math.random() < 0.0005) {
          const logoIndex = Math.floor(Math.random() * logoTextures.length);
          const logoTexture = logoTextures[logoIndex];
          const spriteMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: true });
          const sprite = new THREE.Sprite(spriteMaterial);
          sprite.scale.set(0.5, 0.5, 1);
          sprite.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          scene.add(sprite);
          setTimeout(() => {
            scene.remove(sprite);
          }, 1000);
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      resizeRenderer();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden bg-gray-900">
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
      <div
        ref={containerRef}
        className="relative w-full md:w-1/2 h-96 md:h-full bg-black flex justify-center items-center"
      >
        {webglSupported ? (
          <canvas ref={canvasRef} className="w-full h-full" />
        ) : (
          <div className="absolute text-white text-center px-6 py-4 bg-black/70 rounded z-10">
            <Hero />
            Tu navegador o equipo no puede cargar la animación 3D 😓 <br />
            Prueba desde otro dispositivo o navegador actualizado.
          </div>
        )}
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

function generateRandomBinaryString(length) {
    let binaryString = "";
    for (let i = 0; i < length; i++) {
        binaryString += Math.random() > 0.5 ? "1" : "0"; // Genera un "1" o "0" aleatorio
    }
    return binaryString;
}

export default ParticleBanner;  





// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import Link from "next/link";
// import Hero from "../components/ui/Hero/Hero";

// const ParticleBanner = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [webglSupported, setWebglSupported] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );

//     let renderer;
//     try {
//       renderer = new THREE.WebGLRenderer({
//         canvas: canvasRef.current,
//         alpha: true,
//         antialias: true,
//       });
//     } catch (error) {
//       console.error("No se pudo crear el contexto WebGL:", error);
//       setWebglSupported(false);
//       return;
//     }

//     const resizeRenderer = () => {
//       const width = containerRef.current.clientWidth;
//       const height = containerRef.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     resizeRenderer();

//     camera.position.z = 5;

//     const particlesCount = 500;
//     const particles = new THREE.BufferGeometry();
//     const positions = new Float32Array(particlesCount * 3);
//     const textures = [
//       "/img/tools/angular.png",
//       "/img/tools/dotnet.png",
//       "/img/tools/nextjs.png",
//       "/img/tools/nodejs.png",
//       "/img/tools/react.png",
//       "/img/tools/sharepoint.png",
//       "/img/tools/tailwind.png",
//       "/img/tools/typescript.png",
//     ];
//     for (let i = 0; i < particlesCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
//     }
//     particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     const particleMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 0.1, transparent: true });
//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     const logoTextures = textures.map((texturePath) => {
//       return new THREE.TextureLoader().load(texturePath);
//     });

//     const logoTexture = new THREE.TextureLoader().load("/img/DacsLogo.svg");
//     const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: false });
//     const logoSprite = new THREE.Sprite(logoMaterial);
//     logoSprite.scale.set(3, 1, 1);
//     logoSprite.position.set(0, 0, 0);
//     scene.add(logoSprite);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       particleSystem.rotation.y += 0.005;
//       for (let i = 0; i < particlesCount; i++) {
//         if (Math.random() < 0.0005) {
//           const logoIndex = Math.floor(Math.random() * logoTextures.length);
//           const logoTexture = logoTextures[logoIndex];
//           const spriteMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: true });
//           const sprite = new THREE.Sprite(spriteMaterial);
//           sprite.scale.set(0.5, 0.5, 1);
//           sprite.position.set(
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10
//           );
//           scene.add(sprite);
//           setTimeout(() => {
//             scene.remove(sprite);
//           }, 1000);
//         }
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       resizeRenderer();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden bg-gray-900">
//       <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-20 h-full">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4">
//           Desarrollo y Consultoría IT <br />
//           <span className="text-2xl md:text-4xl text-sky-400">
//             a la medida de tus necesidades
//           </span>
//         </h1>
//         <p className="mb-6 text-lg md:text-xl text-gray-300 max-w-lg">
//           Más de 10 años creando aplicaciones web y móviles con tecnologías como
//           React, .NET, Next.js, Angular y más.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/contact" className="px-6 py-3 bg-sky-700 hover:bg-sky-600 text-white font-semibold rounded-lg text-center shadow">
//             Contáctanos Hoy
//           </Link>
//           <Link href="/servicesDet/appDev" className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center shadow hover:bg-gray-200">
//             Leer Más
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={containerRef}
//         className="relative w-full md:w-1/2 h-96 md:h-full bg-black flex justify-center items-center"
//       >
//         {webglSupported ? (
//           <canvas ref={canvasRef} className="w-full h-full" />
//         ) : (
//           <div className="absolute text-white text-center px-6 py-4 bg-black/70 rounded z-10">
//             <Hero /> 
//             Tu navegador o equipo no puede cargar la animación 3D 😓 <br />
//             Prueba desde otro dispositivo o navegador actualizado.
//           </div>
//         )}
//         {tooltip.visible && (
//           <div
//             ref={tooltipRef}
//             className="pointer-events-none fixed bg-sky-700 text-white px-3 py-1 rounded-md text-sm font-medium select-none"
//             style={{ top: tooltip.y, left: tooltip.x, zIndex: 9999 }}
//           >
//             {tooltip.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ParticleBanner;








// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import Link from "next/link";
// const ParticleBanner = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const isDragging = useRef(false);
//   const previousMousePosition = useRef({ x: 0, y: 0 });
//   const [isMobile, setIsMobile] = useState(false);
//   const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true,
//     });
//     const resizeRenderer = () => {
//       const width = containerRef.current.clientWidth;
//       const height = containerRef.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     resizeRenderer();
//     // Posicionar la cámara
//     camera.position.z = 5;
//     // Crear un sistema de partículas
//     const particlesCount = 500;
//     const particles = new THREE.BufferGeometry();
//     const positions = new Float32Array(particlesCount * 3);
//     const textures = [
//       "/img/tools/angular.png",
//       "/img/tools/dotnet.png",
//       "/img/tools/nextjs.png",
//       "/img/tools/nodejs.png",
//       "/img/tools/react.png",
//       "/img/tools/sharepoint.png",
//       "/img/tools/tailwind.png",
//       "/img/tools/typescript.png"
//     ];
//     for (let i = 0; i < particlesCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10; // X
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
//     }
//     particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     const particleMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 0.1, transparent: true });
//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);
//     // Cargar texturas de los logotipos
//     const logoTextures = textures.map((texturePath) => {
//       const texture = new THREE.TextureLoader().load(texturePath);
//       return texture;
//     });
//     // Crear el logo "DACS" en el centro
//     const logoTexture = new THREE.TextureLoader().load('/img/DacsLogo.svg');
//     const logoMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: false });
//     const logoSprite = new THREE.Sprite(logoMaterial);
//     logoSprite.scale.set(3, 1, 1); // Ajusta el tamaño del logo
//     logoSprite.position.set(0, 0, 0); // Centrar el logo
//     scene.add(logoSprite);
//     // Animación
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particleSystem.rotation.y += 0.005; // Rotar el sistema de partículas antes estaba en 0.01, mas rapido
//       // Cambiar algunas partículas a logotipos
//       for (let i = 0; i < particlesCount; i++) {
//         if (Math.random() < 0.0005) { // 0.5% de probabilidad de mostrar un logotipo
//           const logoIndex = Math.floor(Math.random() * logoTextures.length);
//           const logoTexture = logoTextures[logoIndex];
//           const spriteMaterial = new THREE.SpriteMaterial({ map: logoTexture, transparent: true });
//           const sprite = new THREE.Sprite(spriteMaterial);
//           sprite.scale.set(0.5, 0.5, 1); // Hacer que el logotipo sea más pequeño
//           sprite.position.set(
//             (Math.random() - 0.5) * 10, // X
//             (Math.random() - 0.5) * 10, // Y
//             (Math.random() - 0.5) * 10  // Z
//           );
//           scene.add(sprite);
//           // Hacer que el sprite desaparezca después de un breve momento
//           setTimeout(() => {
//             scene.remove(sprite);
//           }, 1000); // Eliminar el sprite después de 1 segundo
//         }
//       }
//       renderer.render(scene, camera);
//     };
//     animate();
//     const handleResize = () => {
//       resizeRenderer();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);
//   return (
//     <div className="relative flex flex-col md:flex-row items-stretch w-full h-screen pt-12 overflow-hidden bg-gray-900">
//       <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-20 h-full">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4">
//           Desarrollo y Consultoría IT <br />
//           <span className="text-2xl md:text-4xl text-sky-400">
//             a la medida de tus necesidades
//           </span>
//         </h1>
//         <p className="mb-6 text-lg md:text-xl text-gray-300 max-w-lg">
//           Más de 10 años creando aplicaciones web y móviles con tecnologías como
//           React, .NET, Next.js, Angular y más.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/contact" className="px-6 py-3 bg-sky-700 hover:bg-sky-600 text-white font-semibold rounded-lg text-center shadow">
//             Contáctanos Hoy
//           </Link>
//           <Link href="/servicesDet/appDev" className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg text-center shadow hover:bg-gray-200">
//             Leer Más
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={containerRef}
//         className="relative w-full md:w-1/2 h-96 md:h-full bg-black flex justify-center items-center"
//       >
//         <canvas ref={canvasRef} className="w-full h-full" />
//         {tooltip.visible && (
//           <div
//             ref={tooltipRef}
//             className="pointer-events-none fixed bg-sky-700 text-white px-3 py-1 rounded-md text-sm font-medium select-none"
//             style={{ top: tooltip.y, left: tooltip.x, zIndex: 9999 }}
//           >
//             {tooltip.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default ParticleBanner;
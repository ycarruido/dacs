import React from "react";
import { Web, Speed, Security, Accessibility } from "@mui/icons-material";

function FeaturesApps() {
  return (
    <>
      {/* Características clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Característica 1: Accesible */}
          <div className="flex flex-col items-left text-left p-6 bg-sky-100 shadow-md rounded-2xl">
            <Accessibility className="text-sky-950" style={{ fontSize: 60 }} />
            <h3 className="text-xl text-sky-950 font-semibold mt-4">
              Accesible
            </h3>
            <p className="mt-2 text-sky-950">
              Aplicaciones fáciles de usar para todos, sin importar sus
              habilidades. Creemos en experiencias digitales inclusivas.
            </p>
          </div>

          {/* Característica 2: Alto Rendimiento */}
          <div className="flex flex-col items-left text-left p-6 bg-indigo-100 shadow-md rounded-2xl">
            <Speed className="text-sky-950" style={{ fontSize: 60 }} />
            <h3 className="text-xl text-sky-950 font-semibold mt-4">
              Alto Rendimiento
            </h3>
            <p className="mt-2 text-sky-950">
              Aplicaciones rápidas y eficientes. Nos aseguramos de que tus
              usuarios disfruten de una experiencia ágil y sin interrupciones.
            </p>
          </div>

          {/* Característica 3: Responsivo */}
          <div className="flex flex-col items-left text-left p-6 bg-sky-100 shadow-md rounded-2xl">
            <Web className="text-sky-950" style={{ fontSize: 60 }} />
            <h3 className="text-xl text-sky-950 font-semibold mt-4">
              Responsivo
            </h3>
            <p className="mt-2 text-sky-950">
              Soluciones que se ven y funcionan bien en cualquier dispositivo,
              ya sea móvil, tableta o computadora
            </p>
          </div>

          {/* Característica 4: Seguro */}
          <div className="flex flex-col items-left text-left p-6 bg-indigo-100 shadow-md rounded-2xl">
            <Security className="text-sky-950" style={{ fontSize: 60 }} />
            <h3 className="text-xl text-sky-950 font-semibold mt-4">Seguro</h3>
            <p className="mt-2 text-sky-950">
              Medidas de seguridad rigurosas para proteger tus datos y los de
              tus usuarios, manteniendo todo a salvo de cualquier riesgo.
            </p>
          </div>
        </div>
    </>
  );
}

export default FeaturesApps;

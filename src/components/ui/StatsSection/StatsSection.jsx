"use client";
import { useState, useEffect } from "react";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Stat = ({ IconComponent, number, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      
      // Verificar si el elemento existe
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    if (isVisible) {
      let start = 0;
      const increment = Math.ceil(number / 100); // Velocidad del contador
      const interval = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 20);
    }
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, number]);

  return (
    <div className="text-center">
      <div className="text-6xl text-gray-950 font-medium mx-auto sm:text-7xl mb-2">
        <IconComponent className="mb-2" />
        {count}
      </div>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { IconComponent: CodeOffIcon, number: 60, label: "Proyectos Realizados" },
    { IconComponent: GroupAddIcon, number: 37, label: "Clientes Satisfechos" },
    { IconComponent: ScheduleIcon, number: 11, label: "Años de Experiencia" },
    { IconComponent: HandshakeIcon, number: 6, label: "Alianzas Estratégicas" },
  ];

  return (
    <section id="stats-section" className="py-16 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <Stat key={idx} IconComponent={stat.IconComponent} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;


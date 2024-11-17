import Link from "next/link";

export const metadata = {
  title: "DACSystems - Calculadora de Criptomonedas",
  description: "Calcula el valor de las principales criptomonedas en diferentes monedas fiat de forma rápida y sencilla con nuestra calculadora de criptomonedas.",
  keywords: "calculadora de criptomonedas, Bitcoin, Ethereum, Litecoin, monedas fiat, USD, EUR, VES",
};

export default function Tiendalayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}


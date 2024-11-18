import { useState, useRef, useEffect } from "react";

const CurrencySelect = ({ currencies, selectedCurrency, setSelectedCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState("down");
  const buttonRef = useRef(null);

  const handleSelect = (currency) => {
    setSelectedCurrency(currency.ide);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleMenuPosition = () => {
      if (buttonRef.current) {
        const { bottom, top } = buttonRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Verificar si hay más espacio hacia abajo o hacia arriba
        const spaceBelow = windowHeight - bottom;
        const spaceAbove = top;

        // Establecer la posición del menú según el espacio disponible
        setMenuPosition(spaceBelow > spaceAbove ? "down" : "up");
      }
    };

    handleMenuPosition();

    // Agregar un listener para el redimensionamiento de la ventana
    window.addEventListener("resize", handleMenuPosition);
    return () => {
      window.removeEventListener("resize", handleMenuPosition);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 block w-full rounded-lg border border-sky-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm text-left p-2 flex items-center" // Añadido 'flex' y 'items-center'
      >
        {currencies.find(c => c.ide === selectedCurrency)?.flag && (
          <img 
            src={currencies.find(c => c.ide === selectedCurrency)?.flag} 
            alt={`${currencies.find(c => c.ide === selectedCurrency)?.country} flag`} 
            className="w-4 h-4 mr-2" 
          />
        )}
        <span>
          {currencies.find(c => c.ide === selectedCurrency)?.name || "Selecciona una moneda"}
        </span>
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${
            menuPosition === "down" ? "mt-1" : "bottom-full mb-1"
          }`}
          style={{ maxHeight: "200px", overflowY: "auto" }} // Establecer altura máxima y scroll
        >
          {currencies.map((currency) => (
            <div
              key={currency.ide}
              onClick={() => handleSelect(currency)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
            >
              <img src={currency.flag} alt={`${currency.country} flag`} className="w-4 h-4 mr-2" />
              <span>{currency.ide} {currency.country}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;
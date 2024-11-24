"use client";
import { useState, useEffect, useMemo } from "react";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"];
const fiatCurrencies = [
  { ide: "ARS", name: "Peso Argentino", country: "Argentina", flag: "/flags/argentina.png" },
  { ide: "BOB", name: "Boliviano", country: "Bolivia", flag: "/flags/bolivia.png" },
  { ide: "BRL", name: "Real Brasileño", country: "Brazil", flag: "/flags/brazil.png" },
  { ide: "CLP", name: "Peso Chileno", country: "Chile", flag: "/flags/chile.png" },
  { ide: "COP", name: "Peso Colombiano", country: "Colombia", flag: "/flags/colombia.png" },
  { ide: "CRC", name: "Colón Costarricense", country: "Costa Rica", flag: "/flags/costaRica.png" },
  { ide: "CUP", name: "Peso Cubano", country: "Cuba", flag: "/flags/cuba.png" },
  { ide: "DOP", name: "Peso Dominicano", country: "República Dominicana", flag: "/flags/dominicanRepublic.png" },
  { ide: "EUR", name: "Euro", country: "Unión Europea", flag: "/flags/europeanUnion.png" },
  { ide: "GTQ", name: "Quetzal Guatemalteco", country: "Guatemala", flag: "/flags/guatemala.png" },
  { ide: "HTG", name: "Gourde Haitiano", country: "Haití", flag: "/flags/haiti.png" },
  { ide: "HNL", name: "Lempira Hondureño", country: "Honduras", flag: "/flags/honduras.png" },
  { ide: "MXN", name: "Peso Mexicano", country: "México", flag: "/flags/mexico.png" },
  { ide: "NIO", name: "Córdoba Nicaragüense", country: "Nicaragua", flag: "/flags/nicaragua.png" },
  { ide: "PEN", name: "Sol Peruano", country: "Perú", flag: "/flags/peru.png" },
  { ide: "PYG", name: "Guaraní Paraguayo", country: "Paraguay", flag: "/flags/paraguay.png" },
  { ide: "UYU", name: "Peso Uruguayo", country: "Uruguay", flag: "/flags/uruguay.png" },
  { ide: "VES", name: "Bolívar Venezolano", country: "Venezuela", flag: "/flags/venezuela.png" },
  { ide: "BZD", name: "Dólar de Belice", country: "Belice", flag: "/flags/belize.png" },
];

const CryptoCalculator = () => {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/crypto");
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching prices", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchExchangeRates = async () => {
      try {
        const response = await fetch("/api/exchangeRate");
        const data = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };

    fetchPrices();
    fetchExchangeRates();
  }, []);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }).format(number);
  };

  const calculateTotalInUSD = useMemo(() => {
    const priceInUSD = prices[selectedCoin]?.usd || 0;
    return formatNumber(priceInUSD * amount);
  }, [selectedCoin, amount, prices]);

  const convertToSelectedCurrency = useMemo(() => {
    const totalInUSD = calculateTotalInUSD.replace(".", "").replace(",", ".");
    const rate = exchangeRates[selectedCurrency] || 1;
    return formatNumber(totalInUSD * rate);
  }, [calculateTotalInUSD, selectedCurrency, exchangeRates]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const priceInUSD = prices[selectedCoin]?.usd || 0;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Calculadora de <span className="text-yellow-600">Criptomonedas</span>
      </h1>
      <div className="mb-5">
        <label className="block text-sm text-gray-700 mb-2">
          Selecciona una criptomoneda:
        </label>
        <div className="flex justify-around">
          {coins.map((coin) => {
            const coinDescriptions = {
              BTC: "Bitcoin",
              ETH: "Ethereum",
              LTC: "Litecoin",
              XRP: "Ripple",
              DOGE: "Dogecoin",
              WLD: "Worldcoin",
            };
            return (
              <label
                key={coin}
                className="flex items-center space-x-2 relative group cursor-pointer"
              >
                <input
                  type="radio"
                  value={coin}
                  checked={selectedCoin === coin}
                  onChange={() => setSelectedCoin(coin)}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span
                  className="text-sm font-medium"
                  title={coinDescriptions[coin]}
                >
                  {coin}
                </span>
                <span className="absolute left-0 -top-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {coinDescriptions[coin]}
                </span>
              </label>
            );
          })}
        </div>
        <div className="my-5">
          <p className="text-xl text-gray-700 font-semibold">
            Precio de {selectedCoin}:
            <span className="text-yellow-600 font-semibold p-1">
              {priceInUSD ? `$${formatNumber(priceInUSD)}` : "No disponible"}
            </span>
          </p>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Cantidad
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2"
          min={1}
          step="any"
        />
      </div>
      <div className="mb-5">
        <p className="text-xl text-gray-700 font-semibold">
          Total en USD:
          <span className="text-green-700 font-semibold p-1">
            {calculateTotalInUSD ? `$${calculateTotalInUSD}` : "No disponible"}
          </span>
        </p>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-sky-700">
          Convertir en:
        </label>
        {/* <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-sky-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        >
          {fiatCurrencies.map((currency) => (
            <option key={currency.ide} value={currency.ide}>
              <img src={currency.flag} alt={`${currency.country} flag`} className="inline-block w-4 h-4 mr-2" />
              {currency.ide} - {currency.name}
            </option>
          ))}
        </select> */}



  <CurrencySelect
    currencies={fiatCurrencies}
    selectedCurrency={selectedCurrency}
    setSelectedCurrency={setSelectedCurrency}
  />





      </div>
      <div>
        <p className="text-sm text-gray-700">
          Tasa {selectedCurrency}:
          <span className="text-gray-800 font-semibold p-1">
            {exchangeRates[selectedCurrency]
              ? formatNumber(exchangeRates[selectedCurrency])
              : "No disponible"}
          </span>
        </p>
        <p className="font-semibold mt-2 p-1 text-xl">
          Total {selectedCurrency}:
          <span className="text-green-700 font-semibold p-1">
            {convertToSelectedCurrency
              ? `${convertToSelectedCurrency}`
              : "No disponible"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CryptoCalculator;
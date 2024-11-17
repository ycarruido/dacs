"use client";

import { useState, useEffect, useMemo } from "react";

const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"];
const fiatCurrencies = [
  { ide: "EUR", name: "Euro" },
  { ide: "VES", name: "Bolívar Venezolano" },
  { ide: "COP", name: "Peso Colombiano" },
  { ide: "CLP", name: "Peso Chileno" },
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
    const totalInUSD = calculateTotalInUSD.replace('.', '').replace(',', '.');
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
      <h2 className="text-xl font-bold text-blue-600 mb-6 text-center">Calculadora de Criptomonedas</h2>

      <div className="mb-5">
  <label className="block text-sm text-gray-700 mb-2">Selecciona una criptomoneda:</label>
  <div className="flex justify-around">
    {coins.map((coin) => {
      // Descripciones para cada criptomoneda
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
            title={coinDescriptions[coin]} // Tooltip al colocar el cursor
          >
            {coin}
          </span>

          {/* Tooltip personalizado */}
          <span className="absolute left-0 -top-8 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {coinDescriptions[coin]}
          </span>
        </label>
      );
    })}
  </div>
</div>


      <div className="mb-5">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Cantidad</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2"
          min={1}
          step="any"
        />
      </div>

      <div className="mb-5">
        <p className="text-sm text-gray-700">
          Precio de {selectedCoin}: 
          <span className="text-blue-600 font-semibold">
            {priceInUSD ? `$${formatNumber(priceInUSD)}` : "No disponible"}
          </span>
        </p>
        <p className="text-sm text-gray-700">
          Total en USD: 
          <span className="text-green-700 font-semibold">
            {calculateTotalInUSD ? `$${calculateTotalInUSD}` : "No disponible"}
          </span>
        </p>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">Convertir en:</label>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        >
          {fiatCurrencies.map((currency) => (
            <option key={currency.ide} value={currency.ide}>
              {currency.ide} - {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm text-gray-700">
          Tasa {selectedCurrency}: 
          <span className="text-blue-600 font-semibold">
            {exchangeRates[selectedCurrency] ? formatNumber(exchangeRates[selectedCurrency]) : "No disponible"}
          </span>
        </p>
        <p className="text-sm text-green-700 font-semibold mt-2">
          Total {selectedCurrency}: 
          {convertToSelectedCurrency ? `${selectedCurrency} ${convertToSelectedCurrency}` : "No disponible"}
        </p>
      </div>
    </div>
  );
};

export default CryptoCalculator;
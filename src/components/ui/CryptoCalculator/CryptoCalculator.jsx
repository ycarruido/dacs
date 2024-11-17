"use client";
import { useState, useEffect, useMemo } from "react";

const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Símbolos de criptomonedas
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

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleAmountChange = (event) => {
    const newValue = event.target.value;
    setAmount(newValue);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const calculateTotalInUSD = useMemo(() => {
    const priceInUSD = prices[selectedCoin]?.usd || 0;
    return (priceInUSD * amount).toFixed(4);
  }, [selectedCoin, amount, prices]);

  const convertToSelectedCurrency = useMemo(() => {
    const totalInUSD = calculateTotalInUSD;
    const rate = exchangeRates[selectedCurrency] || 1;
    return (totalInUSD * rate).toFixed(4);
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
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-blue-600 mb-4">
        Calculadora de Criptomonedas
      </h2>
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-2">
          Selecciona una criptomoneda:
        </label>
        <div className="flex space-x-4">
          {coins.map((coin) => (
            <label key={coin} className="flex items-center space-x-2">
              <input
                type="radio"
                value={coin}
                checked={selectedCoin === coin}
                onChange={handleCoinChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-sm">{coin}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
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
    onChange={handleAmountChange}
    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
    min={1}
    step="any"
  />
</div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Precio de {selectedCoin}:{" "}
          <span className="text-blue-600 font-medium">
            {priceInUSD ? `$${priceInUSD.toFixed(4)}` : "No disponible"}
          </span>
        </p>
        <p className="text-sm text-gray-600">
          Total en USD:{" "}
          <span className="text-green-700 font-medium">
            {calculateTotalInUSD ? `$${calculateTotalInUSD}` : "No disponible"}
          </span>
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Convertir en:</label>
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        >
          {fiatCurrencies.map((currency) => (
            <option key={currency.ide} value={currency.ide}>
              {currency.ide} - {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-sm text-gray-600">
          Tasa {selectedCurrency}:{" "}
          <span className="text-blue-600 font-medium">
            {exchangeRates[selectedCurrency]
              ? exchangeRates[selectedCurrency].toFixed(4)
              : "No disponible"}
          </span>
        </p>
        <p className="text-sm text-green-700 font-medium mt-2">
          Total {selectedCurrency}:{" "}
          {convertToSelectedCurrency
            ? `${selectedCurrency} ${convertToSelectedCurrency}`
            : "No disponible"}
        </p>
      </div>
    </div>
  );
};

export default CryptoCalculator;


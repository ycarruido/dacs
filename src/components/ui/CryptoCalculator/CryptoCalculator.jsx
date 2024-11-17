"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  CircularProgress,
  Select,
  MenuItem,
} from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin"; // Icono para Bitcoin

const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Símbolos de criptomonedas
const fiatCurrencies = ["EUR", "VES", "COP", "CLP"]; // Monedas fiat disponibles

const CryptoCalculator = () => {
  const [selectedCoin, setSelectedCoin] = useState("BTC"); // Valor por defecto
  const [prices, setPrices] = useState({}); // Estado para precios
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1); // Valor inicial de la cantidad
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Moneda fiat por defecto
  const [exchangeRates, setExchangeRates] = useState({}); // Tasas de cambio

  // Hacer la solicitud a la API para obtener los precios solo una vez (cuando se monta el componente)
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
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar el cambio de moneda seleccionada
  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  // Función para manejar el cambio de la cantidad
  const handleAmountChange = (event) => {
    const newValue = event.target.value;
    setAmount(newValue);
  };

  // Función para manejar el cambio de moneda fiat
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  // Calcular el valor total en USD
  const calculateTotalInUSD = useMemo(() => {
    const priceInUSD = prices[selectedCoin]?.usd || 0;
    return (priceInUSD * amount).toFixed(4);
  }, [selectedCoin, amount, prices]); // Dependencias: solo recalcular cuando cambian selectedCoin o amount

  // Convertir a la moneda seleccionada
  const convertToSelectedCurrency = useMemo(() => {
    const totalInUSD = calculateTotalInUSD;
    const rate = exchangeRates[selectedCurrency] || 1; // Usa la tasa o 1 si no está disponible
    return (totalInUSD * rate).toFixed(4);
  }, [calculateTotalInUSD, selectedCurrency, exchangeRates]); // Dependencias: solo recalcular cuando cambian totalInUSD o selectedCurrency

  if (loading) {
    return <CircularProgress />;
  }

  const priceInUSD = prices[selectedCoin]?.usd || 0;

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 2,
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h6"
        align="left"
        color="primary"
        gutterBottom
        sx={{ fontSize: "1.2rem" }}
      >
        Calculadora de Criptomonedas
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: "0.9rem" }}
        >
          Selecciona una criptomoneda:
        </Typography>
        <RadioGroup value={selectedCoin} onChange={handleCoinChange} row>
          {coins.map((coin) => (
            <FormControlLabel
              key={coin}
              value={coin}
              control={<Radio color="primary" sx={{ fontSize: "0.8rem" }} />}
              label={
                <Box sx={{ display: "flex", alignItems: "left" }}>
                  {coin === "BTC" && (
                    <CurrencyBitcoinIcon sx={{ mr: 1, fontSize: "1rem" }} />
                  )}
                  <Typography sx={{ fontSize: "0.9rem" }}>{coin}</Typography>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Cantidad"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
          fullWidth
          inputProps={{ min: 1, step: "any" }}
          sx={{ fontSize: "0.9rem" }}
        />
      </Box>
      <Box sx={{ textAlign: "left", mb: 2 }}>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          Precio de {selectedCoin}:
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontSize: "1.2rem" }}>
          USD: {priceInUSD ? `$${priceInUSD.toFixed(4)}` : "No disponible"}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontSize: "1.2rem", mt: 1 }}
        >
          Total en USD:{" "}
          {calculateTotalInUSD ? `$${calculateTotalInUSD}` : "No disponible"}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
          Convertir en:
        </Typography>
        <Select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          fullWidth
          sx={{ fontSize: "0.9rem" }}
        >
          {fiatCurrencies.map((currency) => (
            <MenuItem
              key={currency}
              value={currency}
              sx={{ fontSize: "0.9rem" }}
            >
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ textAlign: "left", mt: 2 }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: "0.99rem", mb: 1 }}
        >
          Tasa {selectedCurrency}:{" "}
          {exchangeRates[selectedCurrency]
            ? exchangeRates[selectedCurrency].toFixed(4)
            : "No disponible"}
        </Typography>

        <Typography variant="body2" color="primary" sx={{ fontSize: "1.2rem" }}>
          Total{" "}
          {convertToSelectedCurrency
            ? `${selectedCurrency} ${convertToSelectedCurrency}`
            : "No disponible"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoCalculator;

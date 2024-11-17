export async function GET() {
  const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Usa los símbolos correctos para CoinMarketCap
  const apiKey = '56ce0766-39e5-4f62-9195-806a37e42ecb'; // Reemplaza esto con tu API Key
  try {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coins.join(',')}&convert=USD`;
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json'
      }
    });

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error en la respuesta de la API:", errorData);
      return new Response(
        JSON.stringify({ error: "Error fetching data from CoinMarketCap: " + errorData.status.error_message }),
        { status: 500 }
      );
    }

    const data = await response.json();

    // Verifica que la estructura de datos sea la esperada
    const prices = coins.reduce((acc, coin) => {
      const coinData = data.data[coin]; // Accede usando el símbolo correcto
      if (coinData && coinData.quote) {
        acc[coin] = {
          usd: coinData.quote.USD.price || 0 // Solo obtenemos el precio en USD
        };
      } else {
        acc[coin] = { usd: 0 }; // Si no hay datos, asigna 0
      }
      return acc;
    }, {});

    return new Response(JSON.stringify(prices), { status: 200 });
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap:", error.message);
    return new Response(
      JSON.stringify({ error: "Error fetching data from CoinMarketCap" }),
      { status: 500 }
    );
  }
}
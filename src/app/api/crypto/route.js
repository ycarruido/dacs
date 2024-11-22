export async function GET() {

  /*
    1 - Binance; 
    2 - COINGECKO; 
    3 - COINMARKETCAP 
  */
  const api=1;

  if (api==1){
    /*USANDO LA API DE BINANCE*/
    const coins = ["BTCUSDT", "ETHUSDT", "LTCUSDT", "XRPUSDT", "DOGEUSDT", "WLDUSDT"]; // Símbolos de Binance
    const symbols = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Símbolos que quieres en la respuesta
  
    try {
      const url = `https://api.binance.com/api/v3/ticker/price`;
      const response = await fetch(url);
  
      // Verifica si la respuesta fue exitosa
      if (!response.ok) {
        const errorData = await response.text(); // Cambiado a text() para obtener el mensaje de error
        console.error("Error en la respuesta de la API:", errorData);
        return new Response(
          JSON.stringify({ error: "Error fetching data from Binance: " + errorData }),
          { status: 500 }
        );
      }
  
      const data = await response.json();
      console.log(data);
  
      // Verifica que la estructura de datos sea la esperada
      const prices = symbols.reduce((acc, symbol) => {
        const coinData = data.find(item => item.symbol === symbol + 'USDT'); // Busca el símbolo correspondiente
        if (coinData) {
          acc[symbol] = {
            usd: parseFloat(coinData.price) || 0 // Solo obtenemos el precio en USD
          };
        } else {
          acc[symbol] = { usd: 0 }; // Si no hay datos, asigna 0
        }
        return acc;
      }, {});
  
      return new Response(JSON.stringify(prices), { status: 200 });
    } catch (error) {
      console.error("Error fetching data from Binance:", error.message);
      return new Response(
        JSON.stringify({ error: "Error fetching data from Binance: " + error.message }),
        { status: 500 }
      );
    }


  }else if(api==2){
    /*USANDO LA API DE COINGECKO*/
      const coins = ["bitcoin", "ethereum", "litecoin", "ripple", "dogecoin", "worldcoin"]; // Nombres correctos para CoinGecko
      const symbols = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Símbolos que quieres en la respuesta

      try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd`;
        const response = await fetch(url);
        

    console.log(url);
        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error en la respuesta de la API:", errorData);
          return new Response(
            JSON.stringify({ error: "Error fetching data from CoinGecko: " + errorData }),
            { status: 500 }
          );
        }
        
        const data = await response.json();
        console.log(data);
        
        // Verifica que la estructura de datos sea la esperada
        const prices = symbols.reduce((acc, symbol, index) => {
          const coinKey = coins[index]; // CoinGecko usa el nombre de la criptomoneda como clave
          if (data[coinKey]) {
            acc[symbol] = {
              usd: data[coinKey].usd || 0 // Solo obtenemos el precio en USD
            };
          } else {
            acc[symbol] = { usd: 0 }; // Si no hay datos, asigna 0
          }
          return acc;
        }, {});
        
        return new Response(JSON.stringify(prices), { status: 200 });
      } catch (error) {
        console.error("Error fetching data from CoinGecko:", error.message);
        return new Response(
          JSON.stringify({ error: "Error fetching data from CoinGecko" }),
          { status: 500 }
        );
      }
    
  }else if(api==3){
    /*USANDO LA API DE COINMARKETCAP*/
    const coins = ["BTC", "ETH", "LTC", "XRP", "DOGE", "WLD"]; // Usa los símbolos correctos para CoinMarketCap
    //const apiKey = '56ce0766-39e5-4f62-9195-806a37e42ecb'; // Reemplaza esto con tu API Key
    try {
      const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coins.join(',')}&convert=USD`;
      const response = await fetch(url, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
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

      console.log(data)

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
}

export async function GET() {
    const url = `https://open.er-api.com/v6/latest/USD`; // API gratuita para tasas de cambio

    const url1 = `https://openexchangerates.org/api/latest.json?app_id=${process.env.OEXR_PRO_API_KEY}`;
    
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta de la API de tasas:", errorData);
        return new Response(
          JSON.stringify({ error: "Error fetching data from Exchange API: " + errorData.message }),
          { status: 500 }
        );
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data.rates), { status: 200 });
    } catch (error) {
      console.error("Error fetching data from Exchange API:", error.message);
      return new Response(
        JSON.stringify({ error: "Error fetching data from Exchange API" }),
        { status: 500 }
      );
    }
  }
  
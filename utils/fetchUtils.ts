const fetchAirports = async (input: String) => {
  try {
    const response = await fetch(
      `https://airport-info.p.rapidapi.com/airport?iata=${input}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "83cff150e6msh10100999645ba28p1e74f5jsn982b41d5cbb5",
          "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
        },
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

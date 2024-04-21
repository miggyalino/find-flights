export const fetchAirports = async () => {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/airports?country=PH`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "mXeEx3dW7M26VlhkKKHDSw==CsoOICzS5RkYtSo6",
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

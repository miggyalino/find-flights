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

export const fetchBookings = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/flights`, {
      next: {
        revalidate: 0,
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error; // or return some default value
  }
};

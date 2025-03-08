import fetch from "node-fetch";

class APIToUserAdapter {
  static convert(apiResponse) {
    return {
      lat: parseFloat(apiResponse.latitude),
      lng: parseFloat(apiResponse.longitude),
      date: this.formatDate(apiResponse.timestamp),
      fullName: `${apiResponse.firstName} ${apiResponse.lastName}`,
    };
  }

  static formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}

const fetchUserLocation = async () => {
  try {
    const response = await fetch("http://xyz-location.com/user-locations");

    const apiData = await response.json();

    return APIToUserAdapter.convert(apiData);
  } catch (error) {
    console.error("Error fetching location", error);
    throw new Error("Failed to fetch data");
  }
};

async function main() {
  const userData = await fetchUserLocation();
  console.log(userData);
}

main();

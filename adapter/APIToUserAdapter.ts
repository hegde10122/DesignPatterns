import fetch from "node-fetch";

interface APIResponse {
  latitude: string; // e.g., "12.34567"
  longitude: string; // e.g., "98.76543"
  timestamp: number; // e.g., 1709856000 (Unix timestamp)
  firstName: string;
  lastName: string;
}

interface UserDisplayData {
  lat: number;
  lng: number;
  date: string; // DD-MM-YYYY format
  fullName: string;
}

class APIToUserAdapter {
  static convert(apiResponse: APIResponse): UserDisplayData {
    return {
      lat: parseFloat(apiResponse.latitude), //convert string to number
      lng: parseFloat(apiResponse.longitude), //convert string to number
      date: this.formatDate(apiResponse.timestamp), // Convert timestamp to "DD-MM-YYYY"
      fullName: `${apiResponse.firstName} ${apiResponse.lastName}`, // Combine first and last name
    };
  }

  // Helper function to format the date
  private static formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}

const fetchUserLocation = async (): Promise<UserDisplayData> => {
  try {
    const response = await fetch("http://xyz-location.com/user-locations"); // API call

    const apiData = (await response.json()) as APIResponse; //parse the json response

    //use the adapter to convert API response
    const userData = APIToUserAdapter.convert(apiData);
    return userData;
  } catch (error) {
    console.error("error fetching location", error);
    throw new Error("Failed to fetch data");
  }
};

async function main() {
  fetchUserLocation().then((userData) => console.log(userData));
}

main();

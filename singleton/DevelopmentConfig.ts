import { Config } from "./Config";

export class DevelopmentConfig implements Config {
  getApiUrl(): string {
    return "https://dev.example.com/api";
  }

  getGoogleMapsApiKey(): string {
    return "DEV_GOOGLE_MAPS_API_KEY";
  }
}

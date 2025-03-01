import { Config } from "./Config";

export class ProductionConfig implements Config {
  getApiUrl(): string {
    return "https://prod.example.com/api";
  }

  getGoogleMapsApiKey(): string {
    return "PROD_GOOGLE_MAPS_API_KEY";
  }
}

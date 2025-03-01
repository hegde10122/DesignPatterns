import { Config } from "./Config";

export class StagingConfig implements Config {
  getApiUrl(): string {
    return "https://staging.example.com/api";
  }

  getGoogleMapsApiKey(): string {
    return "STAGING_GOOGLE_MAPS_API_KEY";
  }
}

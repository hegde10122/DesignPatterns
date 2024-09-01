import { ConfigRegistry } from "./ConfigRegistry";

export class ConfigManager {
  private static instance: ConfigManager;
  private config: any;

  private constructor(environment: string) {
    const registry = ConfigRegistry.getInstance();
    this.config = registry.getConfig(environment);
  }

  static getInstance(environment: string): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager(environment);
    }
    return ConfigManager.instance;
  }

  getApiUrl(): string {
    return this.config.getApiUrl();
  }

  getGoogleMapsApiKey(): string {
    return this.config.getGoogleMapsApiKey();
  }
}

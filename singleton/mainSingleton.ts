import { ConfigManager } from "./ConfigManager";
import { ConfigRegistry } from "./ConfigRegistry";
import { DevelopmentConfig } from "./DevelopmentConfig";
import { ProductionConfig } from "./ProductionConfig";
import { StagingConfig } from "./StagingConfig";

function main() {
  const registry = ConfigRegistry.getInstance();
  registry.registerConfig("development", new DevelopmentConfig());
  registry.registerConfig("production", new ProductionConfig());
  registry.registerConfig("staging", new StagingConfig());

  //Instantiate the ConfigManager with a specific environment key

  const environment = "production"; // Change this to 'development' or 'staging' as needed
  const configManager = ConfigManager.getInstance(environment);
  console.log(configManager.getApiUrl()); // Logs the API URL for the specified environment
  console.log(configManager.getGoogleMapsApiKey()); // Logs the Google Maps API key for the specified environment
}

main();

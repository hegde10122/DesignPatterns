export class ConfigRegistry {
  private static instance: ConfigRegistry;

  private static configs: { [key: string]: any } = {};

  private constructor() {}

  static getInstance(): ConfigRegistry {
    if (!ConfigRegistry.instance) {
      ConfigRegistry.instance = new ConfigRegistry();
    }
    return ConfigRegistry.instance;
  }

  registerConfig(env: string, config: any): void {
    if (!ConfigRegistry.configs[env]) {
      ConfigRegistry.configs[env] = config;
    } else {
      throw new Error(`Configuration for '${env}' is already registered.`);
    }
  }

  getConfig(env: string): any {
    const config = ConfigRegistry.configs[env];

    if (!config) {
      throw new Error(`No configuration registered for environment : ${env}`);
    }

    return config;
  }
}

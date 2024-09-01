import { ApiFactory } from "./ApiFactory";

export class ApiClientFactoryRegistry {
  private static registry: { [key: string]: ApiFactory } = {};

  static registerFactory(type: string, factory: ApiFactory): void {
    this.registry[type] = factory;
  }

  static getFactory(type: string): ApiFactory {
    const factory = this.registry[type];
    if (!factory) {
      throw new Error(`No factory registered for type : {$type}`);
    }
    return factory;
  }
}

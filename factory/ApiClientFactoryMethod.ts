import { ApiClient } from "./ApiClient";

export abstract class ApiClientFactoryMethod {
  //The factory method
  abstract createApiClient(): ApiClient;

  //common method that uses the factory method
  async fetchData(endpoint: string, data: any) {
    const client = this.createApiClient();
    const response = await client.sendRequest(endpoint, data);
  }
}

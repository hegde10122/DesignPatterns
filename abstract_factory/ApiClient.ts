// ApiClient.ts
export interface ApiClient {
  fetchData(endpoint: string): Promise<any>;
}

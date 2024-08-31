export interface ApiClient {
  sendRequest(endpoint: string, data: any): Promise<any>;
  parseResponse(response: any): any;
}

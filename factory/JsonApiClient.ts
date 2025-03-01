import { ApiClient } from "./ApiClient";

export class JsonApiClient implements ApiClient {
  async sendRequest(endpoint: string, data: any): Promise<any> {
    //the fetch API being used to make network requests
    const response = fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return this.parseResponse((await response).json());
  }
  parseResponse(response: any) {
    return response;
  }
}

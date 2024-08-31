import { ApiClient } from "./ApiClient";

export class XmlApiClient implements ApiClient {
  parseResponse(response: any): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, "application/xml");
    return xmlDoc;
  }

  async sendRequest(endpoint: string, data: any): Promise<any> {
    //XML serialisation
    const xmlData = new XMLSerializer().serializeToString(data);
    //fetch API to make the network request and get the response
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/xml" },
      body: xmlData,
    });

    const text = await response.text();
    return this.parseResponse(text);
  }
}

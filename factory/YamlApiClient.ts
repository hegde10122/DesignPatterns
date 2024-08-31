import { ApiClient } from "./ApiClient";
//import

export class YamlApiClient implements ApiClient {
  async sendRequest(endpoint: string, data: any): Promise<any> {
    const yaml = require("js-yaml");

    //convert typescript object to yaml
    const yamlData = yaml.dump(data);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-yaml" },
      body: yamlData,
    });

    const text = await response.text();
    return this.parseResponse(text);
  }
  parseResponse(response: any): any {
    const yaml = require("js-yaml");
    return yaml.load(response);
  }
}

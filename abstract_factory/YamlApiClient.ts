import { ApiClient } from "./ApiClient";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";

export class YamlApiClient implements ApiClient {
  fetchData(endpoint: string): Promise<any> {
    console.log(`Fetching data from YAML API: ${endpoint}`);
    return Promise.resolve('{ "data": "YAML data" }');
  }
}

export class YamlApiLogger implements ApiLogger {
  log(message: string): void {
    console.log(`[YAML Logger]: ${message}`);
  }
}

export class YamlApiParser implements ApiParser {
  parse(data: string): any {
    // Mock YAML parsing
    return { data: "Parsed YAML data" };
  }
}

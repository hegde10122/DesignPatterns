import { ApiClient } from "./ApiClient";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";

export class JsonApiClient implements ApiClient {
  fetchData(endpoint: string): Promise<any> {
    console.log(`Fetching data from JSON API: ${endpoint}`);
    return Promise.resolve('{ "data": "JSON data" }');
  }
}

export class JsonApiLogger implements ApiLogger {
  log(message: string): void {
    console.log(`[JSON Logger]: ${message}`);
  }
}

export class JsonApiParser implements ApiParser {
  parse(data: string): any {
    console.log(`[JSON parser]: ${data}`);
    return JSON.parse(data);
  }
}

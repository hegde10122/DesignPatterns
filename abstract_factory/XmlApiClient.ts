import { ApiClient } from "./ApiClient";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";

export class XmlApiClient implements ApiClient {
  fetchData(endpoint: string): Promise<any> {
    console.log(`Fetching data from XML API: ${endpoint}`);
    return Promise.resolve('{ "data": "XML data" }');
  }
}

export class XmlApiLogger implements ApiLogger {
  log(message: string): void {
    console.log(`[XML Logger]: ${message}`);
  }
}

export class XmlApiParser implements ApiParser {
  parse(data: string): any {
    // Mock XML parsing
    return { data: "Parsed XML data" };
  }
}

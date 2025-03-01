import { ApiClient } from "./ApiClient";
import { ApiFactory } from "./ApiFactory";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";
import { XmlApiClient, XmlApiLogger, XmlApiParser } from "./XmlApiClient";

export class XmlApiFactory implements ApiFactory {
  createClient(): ApiClient {
    return new XmlApiClient();
  }
  createLogger(): ApiLogger {
    return new XmlApiLogger();
  }
  createParser(): ApiParser {
    return new XmlApiParser();
  }
}

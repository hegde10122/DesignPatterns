import { ApiClient } from "./ApiClient";
import { ApiFactory } from "./ApiFactory";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";
import { YamlApiClient, YamlApiLogger, YamlApiParser } from "./YamlApiClient";

export class YamlApiFactory implements ApiFactory {
  createClient(): ApiClient {
    return new YamlApiClient();
  }
  createLogger(): ApiLogger {
    return new YamlApiLogger();
  }
  createParser(): ApiParser {
    return new YamlApiParser();
  }
}

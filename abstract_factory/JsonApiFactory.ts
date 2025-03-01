import { ApiClient } from "./ApiClient";
import { ApiFactory } from "./ApiFactory";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";
import { JsonApiClient, JsonApiLogger, JsonApiParser } from "./JsonAPiClient";

export class JsonApiFactory implements ApiFactory {
  createClient(): ApiClient {
    return new JsonApiClient();
  }
  createLogger(): ApiLogger {
    return new JsonApiLogger();
  }
  createParser(): ApiParser {
    return new JsonApiParser();
  }
}

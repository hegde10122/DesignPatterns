import { ApiClient } from "./ApiClient";
import { ApiLogger } from "./ApiLogger";
import { ApiParser } from "./ApiParser";

export interface ApiFactory {
  createClient(): ApiClient;
  createLogger(): ApiLogger;
  createParser(): ApiParser;
}

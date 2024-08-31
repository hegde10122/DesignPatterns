import { ApiClient } from "./ApiClient";
import { ApiClientFactoryMethod } from "./ApiClientFactoryMethod";
import { JsonApiClient } from "./JsonApiClient";

export class JsonApiClientFactoryMethod extends ApiClientFactoryMethod {
  createApiClient(): ApiClient {
    return new JsonApiClient();
  }
}

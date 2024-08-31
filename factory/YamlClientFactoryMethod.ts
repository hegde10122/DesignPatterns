import { ApiClient } from "./ApiClient";
import { ApiClientFactoryMethod } from "./ApiClientFactoryMethod";
import { YamlApiClient } from "./YamlApiClient";

export class YamlClientFactoryMethod extends ApiClientFactoryMethod {
  createApiClient(): ApiClient {
    return new YamlApiClient();
  }
}

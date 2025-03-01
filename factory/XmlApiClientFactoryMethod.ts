import { ApiClient } from "./ApiClient";
import { ApiClientFactoryMethod } from "./ApiClientFactoryMethod";
import { XmlApiClient } from "./XmlApiClient";

export class XmlClientFactoryMethod extends ApiClientFactoryMethod {
  createApiClient(): ApiClient {
    return new XmlApiClient();
  }
}

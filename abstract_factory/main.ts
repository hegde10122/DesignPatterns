//registering the three factories

import { ApiClientFactoryRegistry } from "./ApiClientFactoryRegistry";
import { JsonApiFactory } from "./JsonApiFactory";
import { XmlApiFactory } from "./XmlApiFactory";
import { YamlApiFactory } from "./YamlApiFactory";

function main() {
  //register the three factories
  ApiClientFactoryRegistry.registerFactory("json", new JsonApiFactory());
  ApiClientFactoryRegistry.registerFactory("yaml", new YamlApiFactory());
  ApiClientFactoryRegistry.registerFactory("xml", new XmlApiFactory());

  //user Input or configuration input
  const apiType = "json";

  // Retrieving a factory
  const apiFactory = ApiClientFactoryRegistry.getFactory(apiType);

  const client = apiFactory.createClient();
  const logger = apiFactory.createLogger();
  const parser = apiFactory.createParser();

  client.fetchData("your-https-endpoint").then((data) => {
    logger.log("data fetched successfully");
    const parsedData = parser.parse(data);
    logger.log(parsedData);
  });
}
main();

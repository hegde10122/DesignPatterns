import { JsonApiClientFactoryMethod } from "./JsonApiClientFactoryMethod";
import { XmlClientFactoryMethod } from "./XmlApiClientFactoryMethod";
import { YamlClientFactoryMethod } from "./YamlClientFactoryMethod";

function createXmlData(): Document {
  const parser = new DOMParser();
  const xmlstring = "<request><key>value</key></request>";
  return parser.parseFromString(xmlstring, "application/xml");
}
async function main() {
  //using json api client
  const jsonFactory = new JsonApiClientFactoryMethod();
  await jsonFactory.fetchData("https://api.demo.com/json", {
    key: "value",
    key1: "value1",
  });

  //using xml api client
  const xmlFactory = new XmlClientFactoryMethod();
  await xmlFactory.fetchData("https://api.demo.com/xml", createXmlData());

  //using yaml api client
  const yamlFactory = new YamlClientFactoryMethod();
  await yamlFactory.fetchData("https://api.example.com/yaml", { key: "value" });
}

main();

import { ApiRequestBuilder } from "./ApiRequestBuilder";

function main() {
  const builder = new ApiRequestBuilder();
  const searchRequest = builder
    .setBaseURL("https://api.demo.com/products")
    .addSearchTerm("mobile")
    .addCategoryFilter("5G")
    .build();

  console.log(searchRequest.getURL());

  const sortedRequest = new ApiRequestBuilder()
    .setBaseURL("https://api.demo.com/products")
    .addSortBy("price", "DESC")
    .addPagination(2, 10)
    .build();

  console.log(sortedRequest.getURL());

  const complexRequest = new ApiRequestBuilder()
    .setBaseURL("https://api.demo.com/products")
    .addSearchTerm("smartphone")
    .addCategoryFilter("mobile")
    .addPriceRange(24999, 33999)
    .addSortBy("rating", "ASC")
    .build();

  console.log(complexRequest.getURL());
}

main();

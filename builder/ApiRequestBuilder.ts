import { APIRequest } from "./APIRequest";

export class ApiRequestBuilder {
  private baseURL: string = "";
  private params: URLSearchParams = new URLSearchParams();

  setBaseURL(url: string): this {
    this.baseURL = url;
    return this;
  }

  addSearchTerm(term: string): this {
    this.params.append("search", term);
    return this;
  }

  addCategoryFilter(category: string): this {
    this.params.append("category", category);
    return this;
  }

  addPriceRange(min: number, max: number): this {
    this.params.append("minPrice", min.toString());
    this.params.append("maxPrice", max.toString());
    return this;
  }

  addSortBy(field: string, direction: "ASC" | "DESC" = "ASC"): this {
    this.params.append("sortBy", field);
    this.params.append("direction", direction);
    return this;
  }

  addPagination(page: number, limit: number): ApiRequestBuilder {
    this.params.append("page", page.toString());
    this.params.append("limit", limit.toString());
    return this;
  }

  build(): APIRequest {
    return new APIRequest(this.baseURL, this.params);
  }
}

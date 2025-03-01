export class APIRequest {
  private url: string;
  private params: URLSearchParams;

  constructor(baseURL: string, params: URLSearchParams) {
    this.url = `${baseURL}?${params.toString()}`;
    this.params = params;
  }

  getURL(): string {
    return this.url;
  }

  getParams(): URLSearchParams {
    return this.params;
  }
}

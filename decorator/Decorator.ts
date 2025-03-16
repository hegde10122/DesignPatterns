//step 1: DEFINING THE INTERFACE
interface APIRequestHandler {
    sendRequest(url:string,data:any):Promise<string>;
}

//step 2: IMPLEMENTING THE INTERFACE
class BasicAPIRequestHandler implements APIRequestHandler {
   async sendRequest(url: string, data: any): Promise<string> {
        try {
            const response = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            return await response.text();
          } catch (error) {
            if (error instanceof Error) {
              throw new Error(`Request failed: ${error.message}`);
            } else {
              throw new Error('Request failed with an unknown error');
            }
          }
    }
}

//step 3: CREATING THE base DECORATOR class
class APIRequestDecorator implements APIRequestHandler {
    protected apiRequestHandler: APIRequestHandler;

    constructor(apiRequestHandler: APIRequestHandler) {
        this.apiRequestHandler = apiRequestHandler;
    }

    async sendRequest(url: string, data: any): Promise<string> {
        return this.apiRequestHandler.sendRequest(url, data);
    }
}
// What this class APIRequestDecorator does:
// Wraps another request handler so we can add extra functionality.
// Passes requests to the wrapped handler (default behavior).
//  Allows us to extend behavior without modifying BasicAPIRequestHandler.

//step 4: creating LoggingDecorator class
class LoggingDecorator extends APIRequestDecorator {
    async sendRequest(url: string, data: any): Promise<string> {
        console.log(`POST Request made to ${url} with ${data}`);
        try {
            const response = await this.apiRequestHandler.sendRequest(url, data);
            console.log(`Response from ${url}:`, response);
            return response;
          } catch (error) {
            if (error instanceof Error) {
                console.error(`Error from ${url}:`, error.message);
            } else {
                console.error(`Error from ${url}:`, error);
            }
            throw error;
          }
    }
}
// What this LoggingDecorator class does:
//Logs before sending the request.
// Logs response or error.
// Does not change the actual API request.

//step 5: create retryDecorator class
class RetryDecorator extends APIRequestDecorator {
private maxRetries: number;

constructor(apiRequestHandler: APIRequestHandler, maxRetries: number = 3) {
  super(apiRequestHandler);
  this.maxRetries = maxRetries;

}

async sendRequest(url: string, data: any): Promise<string> {
  let retries = 0;
  while (retries < this.maxRetries) {
    try {
      return await this.apiRequestHandler.sendRequest(url, data);
    } catch (error) {
      
      retries++;
      console.warn(`Retrying (${retries}/${this.maxRetries})...`);
      if (retries === this.maxRetries) throw error;
    }
  }
  throw new Error(`Request failed after ${this.maxRetries} retries`);

}

}

//What this does:
// Tries up to 3 times if the request fails.
// Stops retrying after 3 failed attempts.
// Does not modify the original sendRequest() logic.

//step 6: timeout decorator class
class TimeoutDecorator extends APIRequestDecorator {
  private timeout: number; // in milliseconds

  constructor(apiRequestHandler: APIRequestHandler, timeout: number = 5000) {
    super(apiRequestHandler);
    this.timeout = timeout;
  }

  async sendRequest(url: string, data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Request timed out after ${this.timeout} ms`));
      }, this.timeout);

      this.apiRequestHandler.sendRequest(url, data)
        .then(response => {
          clearTimeout(timer);
          resolve(response);
        })
        .catch(error => {
          clearTimeout(timer);
          reject(error);
        });
    });
  }
}

async function main() {
  let apiHandler: APIRequestHandler = new BasicAPIRequestHandler();

  // Apply Decorators
  apiHandler = new LoggingDecorator(apiHandler);
  apiHandler = new RetryDecorator(apiHandler, 3);
  apiHandler = new TimeoutDecorator(apiHandler, 15000); // 15 sec timeout

  try {
    const apiUrl = "https://api.example.com/data"; // Replace with actual API
    const payload = { userId: 830, name: "Yamie Yaha" };

    const response = await apiHandler.sendRequest(apiUrl, payload);
    console.log("Final Response:", response);
  } catch (error) {
    console.error("Final Error:", error.message);
  }
}

main();
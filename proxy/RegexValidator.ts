//Step 1: Define an interface for UIN validation

interface UINValidator {
    validateUIN(uin: string): Promise<boolean>;
}

//Step 2: Implement the interface using a real validator for API calls

export class ApiUINValidator implements UINValidator {

    private api: any = 'https://api.example.com/validateUIN';

    async validateUIN(uin: string): Promise<boolean> {
        // Call the API to validate the UIN

        try {
            const response = await fetch(`${this.api}?uin=${uin}`);

            if (!response.ok) {
                console.error(`API request failed with status: ${response.status}`);
                return false;
            }

            const data: { validListUINs: string[] } = await response.json();

            console.log(`Validating UIN: ${uin}`);
            return data.validListUINs.includes(uin);
        } catch (error) {
            console.error("Error while validating UIN: " + uin, error);
            return false;
        }

    }
}

//Step 3: Implement a proxy class to validate
export class ProxyUINValidator implements UINValidator {

    private apiValidator: ApiUINValidator;
    private regexPattern: RegExp = /^[A-Z]{3}\d{7}$/; // Example UIN format: ABC1234567 of 10 characters
  
    constructor() {
        this.apiValidator = new ApiUINValidator();
      }

    async validateUIN(uin: string): Promise<boolean> {
        //step 3A: Validate the UIN using the regex pattern
        if (!this.regexPattern.test(uin)) {
            console.error(`Invalid UIN format: ${uin}`);
            return false;
        }

        //step 3B: If the UIN is in the correct format, call the API to validate it
        return await this.apiValidator.validateUIN(uin);
    }
}
import { ProxyUINValidator } from "./RegexValidator";
import { ProxyImageUploader } from "./UploadValidator";

async function main(){

    //we are integrating UIN and image validation
    const uinValidator = new ProxyUINValidator();
    const imageUploader = new ProxyImageUploader();

    //step 1: validate UIN
    const uinSample = "ABC1234567";

    const isUINValid = uinValidator.validateUIN(uinSample);

    if (!isUINValid) {
        console.error("UIN Validation Failed. Image Upload Not Allowed.");
        return;
      }

      
      console.log("UIN is valid. Proceeding to image upload...");

      // Step 2: Upload Image (Mock Base64)
  const smallImage = "iVBORw0KGgoAAAANSUhEUgAA..."; // Small image base64
  const largeImage = "iVBORw0KGgoAAAANSUhEUgA..." + "A".repeat(3 * 1024 * 1024); // Large image


  console.log("\n--- Attempting to Upload Small Image ---");
  console.log(await imageUploader.uploadImage(smallImage)); // Should upload

  console.log("\n--- Attempting to Upload Large Image ---");
  console.log(await imageUploader.uploadImage(largeImage)); 
}

main();
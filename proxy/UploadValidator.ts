//step 1: Define an interface for image upload

interface ImageUploader{
    uploadImage(imagebase64: string): Promise<boolean>;
}

//step 2: Implement the interface using a real uploader for API calls
export class RealUploader implements ImageUploader {

    private uploadURL: string = "https://example.com/api/upload-image"; // Replace with actual API

    async uploadImage(base64Image: string): Promise<boolean> {
        // Call the API to upload base 64 image

        try {
            const response = await fetch(this.uploadURL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ image: base64Image }),
            });
      
            if (!response.ok) {
              console.error(`Upload failed with status: ${response.status}`);
              return false;
            }
      
            console.log(`Image uploaded successfully.`);
            return true;
          } catch (error) {
            console.error("Error during image upload:", error);
            return false;
          }
    }
}

//step 3: proxy image uploader - validates before upload
export class ProxyImageUploader implements ImageUploader {
    private realUploader: RealUploader;
    private MAX_SIZE_MB = 1.5; // Maximum allowed size (1.5 MB)

    constructor() {
        this.realUploader = new RealUploader();
    }

    async uploadImage(imagebase64: string): Promise<boolean> {
       //calculate size of base 64 image

       const imageSizeMB = (imagebase64.length * (3 / 4)) / (1024 * 1024);

       console.log(`Image size: ${imageSizeMB.toFixed(2)}MB`);
   
       // Check if size exceeds limit
       if (imageSizeMB > this.MAX_SIZE_MB) {
         console.error(`Error: Image exceeds the allowed ${this.MAX_SIZE_MB}MB limit.`);
         return false;
       }
   
       // Proceed with upload
       return await this.realUploader.uploadImage(imagebase64);
        
    }
}
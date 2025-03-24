import { AESEncryptionStrategy } from "./AESEncryptionStrategy";
import * as crypto from "crypto";

export class AESGCMEncryption implements AESEncryptionStrategy {


    /**
     * 
    Encryption (encrypt method)

    Creates a cipher object using AES-256-GCM mode.
    Converts the key and IV into buffers.
    Encrypts the plaintext using .update() and .final().
    Retrieves an authentication tag (authTag) for integrity verification.
    Returns the encrypted text along with the auth tag, separated by :
     */
    encrypt(plainText: string, key: string, iv: string): string {
        const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
        const encrypted = Buffer.concat([cipher.update(plainText, "utf-8"), cipher.final()]);
        const authTag = cipher.getAuthTag(); // Authentication tag
        return encrypted.toString("hex") + authTag.toString("hex");
    }

    /**
     * 
    Decryption (decrypt method)
    Splits the ciphertext into encrypted text and auth tag.
    Creates a decipher object using the same AES-256-GCM mode.
    Uses .setAuthTag() to ensure integrity.
    Decrypts using .update() and .final()
     */
    decrypt(cipherText: string, key: string, iv: string): string {
        const authTag = cipherText.slice(-32); // Extract last 16 bytes (Auth Tag)
        const encryptedData = cipherText.slice(0, -32); // Extract encrypted data

        const decipher = crypto.createDecipheriv("aes-256-gcm", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
        decipher.setAuthTag(Buffer.from(authTag, "hex"));

        const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedData, "hex")), decipher.final()]);
        return decrypted.toString("utf-8");
    }
}

/**
 AES-GCM (Galois/Counter Mode)
 How It Works

 Uses a Counter Instead of Chaining Blocks (Each block is encrypted independently).
 Includes an Authentication Tag (AuthTag) to prevent tampering.
 No Need for Padding (unlike CBC, which requires padding).
 Faster and More Secure than CBC due to parallel encryption.

 Key Takeaway: AES-GCM prevents unauthorized tampering with data by including an authentication tag.
 */

 /**
   AES-GCM is preferred for API security because it provides both encryption and integrity protection.
   AES-CBC is still widely used, but it requires additional security mechanisms to prevent tampering. 
  */
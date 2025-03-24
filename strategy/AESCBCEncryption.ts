import { AESEncryptionStrategy } from "./AESEncryptionStrategy";
import * as crypto from "crypto";

export class AESCBCEncryption implements AESEncryptionStrategy {

    /**
     Encryption (encrypt method)
    Creates a cipher object using aes-256-cbc mode.
    Converts the key and IV from hex strings into buffers.
    Encrypts the plaintext block by block (chaining effect).
    Uses .update() to process the plaintext.
    Uses .final() to finalize encryption and get the last block.
     */
    encrypt(plainText: string, key: string, iv: string): string {
      const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
      const encrypted = Buffer.concat([cipher.update(plainText, "utf-8"), cipher.final()]);
      return encrypted.toString("hex");
    }

    /**
     * 
      Decryption (decrypt method)

      Creates a decipher object using the same AES-256-CBC mode.
      Converts the key and IV back into buffers.
      Processes the ciphertext block by block, reversing the chaining process.
      Uses .update() to process the ciphertext.
      Uses .final() to get the final decrypted text.
     */
  
    decrypt(cipherText: string, key: string, iv: string): string {
      const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
      const decrypted = Buffer.concat([decipher.update(Buffer.from(cipherText, "hex")), decipher.final()]);
      return decrypted.toString("utf-8");
    }
  }
  
  /**
  
  AES-CBC (Cipher Block Chaining) Mode


  AES-CBC requires an IV (Initialization Vector) for security.


How It Works

Divides Plaintext into Blocks (16 bytes each).
Uses an Initialization Vector (IV) for the first block.
Each Block is XORed with the Previous Block's Ciphertext before encryption.
Final Encrypted Blocks Depend on Previous Blocks (hence, chaining).
Decryption Uses the Same IV and XORs Each Block to Recover Plaintext.

Key Takeaway: Each ciphertext block depends on the previous one, making it resistant to pattern attacks.

   */
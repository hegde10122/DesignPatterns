import { AESEncryptionStrategy } from "./AESEncryptionStrategy";


export class AESEncryption {
    private strategy: AESEncryptionStrategy;
  
    constructor(strategy: AESEncryptionStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: AESEncryptionStrategy): void {
      this.strategy = strategy;
    }
  
    encryptText(plainText: string, key: string, iv: string): string {
      return this.strategy.encrypt(plainText, key, iv);
    }
  
    decryptText(cipherText: string, key: string, iv: string): string {
      return this.strategy.decrypt(cipherText, key, iv);
    }
  }
  
  /**
   Understanding AES Encryption

   AES (Advanced Encryption Standard) is a symmetric encryption algorithm that uses a secret key to
   encrypt and decrypt data. There are different modes of AES, each designed for different use cases.


   */
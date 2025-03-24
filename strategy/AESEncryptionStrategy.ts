
export interface AESEncryptionStrategy {
  encrypt(plainText: string, key: string, iv: string): string;
  decrypt(cipherText: string, key: string, iv: string): string;
}

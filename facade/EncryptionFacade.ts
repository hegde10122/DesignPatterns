import * as crypto from 'crypto';
import { AESEncryption } from './AESEncryption';


//  FACADE: Simplifies Encryption & Decryption
class EncryptionFacade {
    private encryptionService = new AESEncryption();

    encryptData(data: string): string {
        return this.encryptionService.encrypt(data);
    }

    decryptData(encryptedData: string): string {
        return this.encryptionService.decrypt(encryptedData);
    }
}

function main() {
    const facade = new EncryptionFacade();

    const encryptedText = facade.encryptData("Confidential Data");
    console.log("Encrypted:", encryptedText);

    const decryptedText = facade.decryptData(encryptedText);
    console.log("Decrypted:", decryptedText);

}

main();
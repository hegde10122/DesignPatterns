import * as crypto from 'crypto';

export class AESEncryption {

    private key = crypto.createHash('sha256').update('my-secured-key').digest();

    private generateIV(): Buffer {
        return crypto.randomBytes(16);
    }

    encrypt(data: string): string {
        const iv = this.generateIV();
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv); 
        let encrypted = cipher.update(data, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return `${iv.toString('hex')}:${encrypted}`; // Store IV with encrypted data
    }

    decrypt(encryptedData: string): string {
        const [ivHex, encrypted] = encryptedData.split(':');
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv); 
        let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }

}

/**
  
The encrypt method is used to 
encrypt plaintext data using the AES-256-CBC (Cipher Block Chaining) encryption algorithm.

Here we generate a random Initialization Vector (IV). 
The IV is a random 16-byte buffer (128-bit).
In CBC mode, the IV helps ensure that the same plaintext encrypted multiple times produces 
different ciphertexts, making the encryption more secure.

crypto.randomBytes(16) generates the IV as a buffer of 16 random bytes.

crypto.createCipheriv() creates a cipher object that allows us to perform encryption.

We pass three parameters:

'aes-256-cbc': The AES algorithm with 256-bit key length and CBC mode.

this.key: The encryption key. 
In this case, it's derived from a SHA-256 hash of a string ('my-secured-key'). 
This gives us a 256-bit key required by AES-256.

iv: The random initialization vector generated earlier.

cipher.update(data, 'utf-8', 'hex'): This encrypts the input data (which is assumed to be a string in 
'utf-8' encoding) and returns the encrypted portion in 'hex' format.

cipher.final('hex'): This finishes the encryption process and returns any final
encrypted data (in case the data needs to be padded to make
the length a multiple of the block size).

Both parts are concatenated to form the final encrypted string. 
The concatenation can be later split into the IV 
and encrypted part during decryption.
 */

/**
  decryptData method is used to decrypt the encrypted data back into the original plaintext. 

The encrypted data comes in the format <IV>:<encrypted_data>, where the IV and encrypted data are separated by a colon.

We use split(':') to break the string into two parts: ivHex (hexadecimal representation of the IV) 
and encrypted (the actual encrypted data).

Buffer.from(ivHex, 'hex') converts the IV from a hexadecimal 
string back to a Buffer object, which is required by crypto.createDecipheriv().

crypto.createDecipheriv() creates a decipher object that allows us to perform decryption.

The parameters are similar to encryption:
'aes-256-cbc': The AES algorithm with 256-bit key length and CBC mode.

this.key: The same key used during encryption (it should be the same for both encryption and decryption).

iv: The IV used during encryption (extracted from the encryptedData).

decipher.update(encrypted, 'hex', 'utf-8'): This decrypts the encrypted data (which is in 'hex' format) 
and returns the decrypted portion as a string in 'utf-8' encoding.

decipher.final('utf-8'): This finalizes the decryption process, ensuring that any padding is
removed and the full decrypted data is returned.

 */

/**
Key Concepts in AES-256-CBC----

AES-256-CBC (Cipher Block Chaining):

A symmetric encryption algorithm, meaning the same key is used for both encryption and decryption.
CBC mode requires an initialization vector (IV), which ensures that the encryption of the same 
plaintext multiple times results in different ciphertexts.
AES-256 refers to using a 256-bit key.

Padding:
The input data must be a multiple of the block size (16 bytes in AES). If the data is not 
a multiple of 16 bytes, 
padding is added during encryption. The decryption process removes the padding.
 */
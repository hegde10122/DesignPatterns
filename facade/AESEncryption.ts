import * as crypto from 'crypto';

export class AESEncryption {

    private key = crypto.createHash('sha256').update('my-secured-key').digest();

    private generateIV(): Buffer {
        return crypto.randomBytes(16);
    }

    encrypt(data: string): string {
        const iv = this.generateIV();
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv); // ✅ Changed to CBC mode
        let encrypted = cipher.update(data, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return `${iv.toString('hex')}:${encrypted}`; // Store IV with encrypted data
    }

    decrypt(encryptedData: string): string {
        const [ivHex, encrypted] = encryptedData.split(':');
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv); // ✅ Changed to CBC mode
        let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }

}
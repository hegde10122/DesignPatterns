import * as crypto from "crypto";
import { AESEncryption } from "./AESEncryption";
import { AESCBCEncryption } from "./AESCBCEncryption";
import { AESGCMEncryption } from "./AESGCMEncryption";

function main() {

    const key = crypto.randomBytes(32).toString("hex"); // 256-bit key
    const iv = crypto.randomBytes(16).toString("hex");  // 128-bit IV
    const text = "Hello, AES Strategy Pattern!";

    // Use AES-CBC
    const aes = new AESEncryption(new AESCBCEncryption());
    const encryptedCBC = aes.encryptText(text, key, iv);
    console.log("CBC Encrypted:", encryptedCBC);
    console.log("CBC Decrypted:", aes.decryptText(encryptedCBC, key, iv));

    // Switch to AES-GCM
    aes.setStrategy(new AESGCMEncryption());
    const encryptedGCM = aes.encryptText(text, key, iv);
    console.log("GCM Encrypted:", encryptedGCM);
    console.log("GCM Decrypted:", aes.decryptText(encryptedGCM, key, iv));

}

main();
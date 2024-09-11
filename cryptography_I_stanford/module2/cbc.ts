import CryptoJS from 'crypto-js';

// Convert the hex key and ciphertext into CryptoJS formats
const key = CryptoJS.enc.Hex.parse('140b41b22a29beb4061bda66b6747e14');
const ciphertextHex = '4ca00ff4c898d61e1edbf1800618fb2828a226d160dad07883d04e008a7897ee2e4b7465d5290d0c0e6c6822236e1daafb94ffe0c5da05d9476be028ad7c1d81';
const ciphertext = CryptoJS.enc.Hex.parse(ciphertextHex);

// Extract the IV from the first 16 bytes (32 hex characters)
const iv = CryptoJS.enc.Hex.parse(ciphertextHex.slice(0, 32));

// The actual ciphertext is everything after the IV
const encrypted = CryptoJS.enc.Hex.parse(ciphertextHex.slice(32));

// Perform the AES-CBC decryption
const decrypted = CryptoJS.AES.decrypt(
  { ciphertext: encrypted }, // Provide ciphertext as an object
  key, 
  { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
);

// Convert decrypted data from bytes to string (UTF-8 assumed)
const decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);

console.log('Decrypted message:', decryptedMessage);


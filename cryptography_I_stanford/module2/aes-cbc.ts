import ModeOfOperation from 'aes-ts';
import utils from 'aes-ts';

// Convert the hex strings to byte arrays
//const key = utils.hexToBytes('140b41b22a29beb4061bda66b6747e14');
//const ciphertext = hexToBytes('4ca00ff4c898d61e1edbf1800618fb2828a226d160dad07883d04e008a7897ee2e4b7465d5290d0c0e6c6822236e1daafb94ffe0c5da05d9476be028ad7c1d81');

// Extract the IV (first 16 bytes) and the actual ciphertext
//const iv = ciphertext.slice(0, 16);

const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];
const encryptedMessage = ciphertext.slice(16);

// Set up the AES in CBC mode
const aesCbc = new ModeOfOperation.CBC(key, iv);

// Decrypt the ciphertext
const decryptedBytes = aesCbc.decrypt(encryptedMessage);

// Convert decrypted bytes to a readable string (assuming it's UTF-8 encoded)
const decryptedMessage = new TextDecoder().decode(decryptedBytes);

console.log('Decrypted message:', decryptedMessage);

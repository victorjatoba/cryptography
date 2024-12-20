/**
 * How to run?
 *   node encrypt.js plaintext_in_hex key_in_hex
 *
 * argument 1: the plaintext in hexadecimal
 * argument 2: the key in hexadecimal
 * result: the XOR between them in hex
 */

// Convert hex string to byte array
function hexToBytes(hexStr: string): Uint8Array {
  const bytes = new Uint8Array(hexStr.length / 2);
  for (let i = 0; i < hexStr.length; i += 2) {
    bytes[i / 2] = parseInt(hexStr.substr(i, 2), 16);
  }
  return bytes;
}

// XOR two byte arrays
function strxor(a: Uint8Array, b: Uint8Array): Uint8Array {
  const length = Math.min(a.length, b.length);
  const result = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = a[i] ^ b[i];
  }
  return result;
}

// Input as text
const plaintext = process.argv[2]
const key       = process.argv[3]

// convert
const plaintextInBytes = hexToBytes(plaintext);
const keyInBytes = hexToBytes(key);

// XOR the ciphertexts
const xor = strxor(plaintextInBytes, keyInBytes);

// Print XOR result in hex
console.log(`xor: ${Buffer.from(xor).toString('hex')}`);


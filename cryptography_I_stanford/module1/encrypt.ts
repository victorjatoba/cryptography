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

// Hex strings to byte arrays
const testHex = "74657374"
const key1Hex = "6B657931"
const ch1 = "32510ba9"
const ch2 = "315c4eea"
const ct1 = hexToBytes(ch1);
const targetCt = hexToBytes(ch2);

// XOR the ciphertexts
const xorCt1Target = strxor(ct1, targetCt);

// Print XOR result in hex
console.log(Buffer.from(xorCt1Target).toString('hex'));


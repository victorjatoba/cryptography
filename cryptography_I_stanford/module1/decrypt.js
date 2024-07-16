// Convert hex string to byte array
function hexToBytes(hexStr) {
    var bytes = new Uint8Array(hexStr.length / 2);
    for (var i = 0; i < hexStr.length; i += 2) {
        bytes[i / 2] = parseInt(hexStr.substr(i, 2), 16);
    }
    return bytes;
}
// XOR two byte arrays
function strxor(a, b) {
    var length = Math.min(a.length, b.length);
    var result = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        result[i] = a[i] ^ b[i];
    }
    return result;
}
// Hex strings to byte arrays
var ciphertext = hexToBytes("315c4eea");
var key = hexToBytes("030d4543");
// XOR the ciphertexts
var originalMessage = strxor(ciphertext, key);
// Print XOR result in hex
console.log(Buffer.from(originalMessage).toString('hex'));
console.log(Buffer.from(originalMessage).toString('ascii'));

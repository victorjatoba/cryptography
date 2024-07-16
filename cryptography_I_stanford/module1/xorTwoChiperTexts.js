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
var ct1 = hexToBytes("74657374");
var targetCt = hexToBytes("6B6579");
// XOR the ciphertexts
var xorCt1Target = strxor(ct1, targetCt);
// Print XOR result in hex
console.log(Buffer.from(xorCt1Target).toString('hex'));

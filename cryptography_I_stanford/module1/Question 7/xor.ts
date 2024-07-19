// Function to XOR two binary strings
function xor(bin1: string, bin2: string): string {
    // Ensure both binary strings are of the same length
    const maxLength = Math.max(bin1.length, bin2.length);
    const paddedBin1 = bin1.padStart(maxLength, '0');
    const paddedBin2 = bin2.padStart(maxLength, '0');

    // Initialize the result string
    let result = '';

    // XOR each pair of corresponding bits
    for (let i = 0; i < maxLength; i++) {
        const bit1 = paddedBin1[i];
        const bit2 = paddedBin2[i];
        const xorBit = (bit1 === bit2) ? '0' : '1';
        result += xorBit;
    }

    return result;
}

// Driver code to test the function
const binaryString1 = "0000110100000111101000010100010101101001111111111010110011100111111011000011101110100110111101011111011000100011";
const binaryString2 = "0110000101110100011101000110000101100011011010110010000001100001011101000010000001100100011101010111001101101011";
console.log(`Binary String 1: ${binaryString1}`);
console.log(`Binary String 2: ${binaryString2}`);
console.log(`XOR Result: ${xor(binaryString1, binaryString2)}`);

// Function to convert a binary string to a hexadecimal string
function binaryToHex(binary: string): string {
    // Pad the binary string to ensure its length is a multiple of 4
    const paddedBinary = binary.padStart(Math.ceil(binary.length / 4) * 4, '0');

    // Initialize the hexadecimal result string
    let hex = '';

    // Iterate through the binary string in chunks of 4 bits
    for (let i = 0; i < paddedBinary.length; i += 4) {
        // Get the current 4-bit segment
        const binarySegment = paddedBinary.slice(i, i + 4);
        
        // Convert the binary segment to a decimal number
        const decimalValue = parseInt(binarySegment, 2);
        
        // Convert the decimal number to its hexadecimal representation and append to result
        hex += decimalValue.toString(16);
    }

    return hex.toUpperCase(); // Optionally convert to uppercase
}

// Driver code to test the function
const binaryString = "0110110001110011110101010010010000001010100101001000110010000110100110000001101111000010100000001000010101001000";
console.log(`Binary: ${binaryString}`);
console.log(`Hexadecimal: ${binaryToHex(binaryString)}`);

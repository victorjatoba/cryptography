// Function to convert a hexadecimal string to an ASCII string
function hexToASCII(hex: string): string {
    // Initialize the ASCII result string
    let ascii = '';

    // Ensure the hexadecimal string length is even
    if (hex.length % 2 !== 0) {
        throw new Error("Invalid hexadecimal string");
    }

    // Iterate through the hexadecimal string in pairs of characters
    for (let i = 0; i < hex.length; i += 2) {
        // Get the current pair of hexadecimal characters
        const hexPair = hex.slice(i, i + 2);

        // Convert the hexadecimal pair to a decimal number
        const decimalValue = parseInt(hexPair, 16);

        // Convert the decimal number to its ASCII character
        ascii += String.fromCharCode(decimalValue);
    }

    return ascii;
}

// Driver code to test the function
const hexString = "6C73D5240A948C86981BC2808548";
console.log(`Hexadecimal: ${hexString}`);
console.log(`ASCII: ${hexToASCII(hexString)}`);

// Function to convert a hexadecimal string to a binary string
function hexToBinary(hex: string): string {
    // Map to convert hexadecimal characters to binary
    const hexToBinaryMap: { [key: string]: string } = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
        'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111'
    };

    // Initialize an empty binary string
    let binary = "";

    // Iterate through each character of the hexadecimal string
    for (let i = 0; i < hex.length; i++) {
        // Get the corresponding binary value from the map
        const binaryValue = hexToBinaryMap[hex[i]];
        if (binaryValue) {
            // Append the binary value to the result string
            binary += binaryValue;
        } else {
            // If an invalid character is found, return an error message
            throw new Error(`Invalid hexadecimal character: ${hex[i]}`);
        }
    }

    return binary;
}

// Driver code to test the function
const hex1 = "6c73d5240a948c86981bc294814d";
console.log(`Hexadecimal: ${hex1}`);
console.log(`Binary: ${hexToBinary(hex1)}`);

const hex2 = "61747461636b206174206475736b";
console.log(`Hexadecimal: ${hex2}`);
console.log(`Binary: ${hexToBinary(hex2)}`);

// TypeScript program to convert
// ASCII string to Hexadecimal
// format string

// Function to convert
// decimal to hexadecimal
function decToHexa(n: number): string {
    // char array to store
    // hexadecimal number
    const hexaDeciNum: string[] = new Array(100).fill('');

    // counter for hexadecimal
    // number array
    let i = 0;

    while (n !== 0) {
        // temporary variable
        // to store remainder
        let temp = 0;

        // Storing remainder
        // in temp variable.
        temp = n % 16;

        // Check if temp < 10
        if (temp < 10) {
            hexaDeciNum[i] = String.fromCharCode(temp + 48);
            i++;
        } else {
            hexaDeciNum[i] = String.fromCharCode(temp + 87);
            i++;
        }

        n = Math.floor(n / 16);
    }

    let ans = "";

    // Printing hexadecimal number
    // array in reverse order
    for (let j = i - 1; j >= 0; j--) {
        ans += hexaDeciNum[j];
    }

    return ans;
}

// Function to convert ASCII to HEX
function ASCIItoHEX(ascii: string): string {
    // Initialize final String
    let hex = "";

    // Make a loop to iterate through
    // every character of ascii string
    for (let i = 0; i < ascii.length; i++) {
        // Take a char from
        // position i of string
        const ch = ascii[i];

        // Cast char to integer and
        // find its ascii value
        const tmp = ch.charCodeAt(0);

        // Change this ascii value
        // integer to hexadecimal value
        const part = decToHexa(tmp);

        // Add this hexadecimal value
        // to final string.
        hex += part;
    }

    // Return the final
    // string hex
    return hex;
}

// Driver code
// Print the Hex String
console.log(ASCIItoHEX("attack at dawn"));
console.log(ASCIItoHEX("attack at dusk"));

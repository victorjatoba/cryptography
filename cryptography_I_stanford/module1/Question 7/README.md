# Question 7

Suppose you are told that the one time pad encryption of the message "attack at dawn" is 6c73d5240a948c86981bc294814d

(the plaintext letters are encoded as 8-bit ASCII and the given ciphertext is written in hex). What would be the one time pad encryption of the message "attack at dusk" under the same OTP key?

## Response Breakdown

To solve the one-time pad encryption problem, you need to follow these steps:

1. **Convert the hex-encoded ciphertext to binary**.
2. **Convert the plaintext message "attack at dawn" to binary**.
3. **XOR** the binary representations of the plaintext and ciphertext to find the OTP key.
4. **Use the OTP key** to encrypt the new message "attack at dusk".

### Solution

1. 
- cipher = `6c73d5240a948c86981bc294814d`
- cipherBinary = `0110110001110011110101010010010000001010100101001000110010000110100110000001101111000010100101001000000101001101`

2. 
- message = `attack at dawn`
- messageInHex = `61747461636b206174206461776e`
- messageBinary = `0110000101110100011101000110000101100011011010110010000001100001011101000010000001100100011000010111011101101110`

3. 
- XOR (OTP key) = `0000110100000111101000010100010101101001111111111010110011100111111011000011101110100110111101011111011000100011`

4. 
- message = `attack at dusk`
- messageInHex = `61747461636b206174206475736b`
- messageBinary = `0110000101110100011101000110000101100011011010110010000001100001011101000010000001100100011101010111001101101011`
- XOR (with key) = `0110110001110011110101010010010000001010100101001000110010000110100110000001101111000010100000001000010101001000`

**(RESPONSE)** the one time pad encryption of the message "attack at dusk" is:

```plaintext
6c73d5240a948c86981bc2808548
```

### Step-by-Step Solution:

1. **Convert "attack at dawn" to binary:**
   - ASCII values:
     - 'a' = 97 (01100001)
     - 't' = 116 (01110100)
     - 'a' = 97 (01100001)
     - 'c' = 99 (01100011)
     - 'k' = 107 (01101011)
     - ' ' = 32 (00100000)
     - 'a' = 97 (01100001)
     - 't' = 116 (01110100)
     - ' ' = 32 (00100000)
     - 'd' = 100 (01100100)
     - 'a' = 97 (01100001)
     - 'w' = 119 (01110111)
     - 'n' = 110 (01101110)

2. **Convert "attack at dusk" to binary:**
   - ASCII values:
     - 'a' = 97 (01100001)
     - 't' = 116 (01110100)
     - 'a' = 97 (01100001)
     - 'c' = 99 (01100011)
     - 'k' = 107 (01101011)
     - ' ' = 32 (00100000)
     - 'a' = 97 (01100001)
     - 't' = 116 (01110100)
     - ' ' = 32 (00100000)
     - 'd' = 100 (01100100)
     - 'u' = 117 (01110101)
     - 's' = 115 (01110011)
     - 'k' = 107 (01101011)

3. **XOR the given ciphertext with the plaintext to find the key:**
   - Given ciphertext (hex): 6c73d5240a948c86981bc294814d
   - Binary:
     ```
     01101100 01110011 11010101 00100100 00001010 10010100 10001100 10000110 10011000 00011001 11000010 10010100 10000101 01001101
     ```

4. **XOR "attack at dawn" (binary) with the ciphertext (binary) to find the OTP key.**

5. **Use the OTP key** obtained to XOR with the binary representation of "attack at dusk".

By performing these operations, you will find the correct encrypted message in hex. The solution will look like this:

```plaintext
6c73d5240a948c86981bc2808548
```

This should be the one-time pad encryption of "attack at dusk" under the same OTP key.
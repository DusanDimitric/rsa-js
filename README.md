# rsa-js

This package provides a set of functions for encrypting and decrypting messages using RSA encryption. It should not be used
in any sort of official capacity whatsoever, as it is primarily for demonstration purposes.

## Usage

This library comes with three main functions: `generateKeyPair`, `encryptRSA` and `decryptRSA`. In the example below, the message will be encrypted using the public key of the intended recipient. Once the recipient has received the message, they will decrypt it using their private key.

```javascript
var key = generateKeyPair()
var message = 'Hello world'
var encryptedMessage = encryptRSA(message, key.public)
var decryptedMessage = decryptRSA(encryptedMessage, key.private)
```

## Installation

`yarn install rsa-encryption-js` or
`npm install rsa-encryption-js`

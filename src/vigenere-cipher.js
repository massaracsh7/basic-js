const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      let letter = message.charAt(i).toUpperCase();
      if (letter.match(/[A-Z]/i)) {
        result += String.fromCharCode((letter.charCodeAt() + key.toUpperCase().charCodeAt(j)) % 26 + 65);
        j = ++j % key.length;
      } else {
        result += letter;
      }

    }

    if (this.mode === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
      // remove line with error and write your code here
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      let letter = encryptedMessage.charAt(i).toUpperCase();
      if (letter.match(/[A-Z]/i)) {
        result += String.fromCharCode(90 - (25 - (letter.charCodeAt() - key.toUpperCase().charCodeAt(j))) % 26);
        j = ++j % key.length;
      } else {
        result += letter;
      }

    }
    if (this.mode === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

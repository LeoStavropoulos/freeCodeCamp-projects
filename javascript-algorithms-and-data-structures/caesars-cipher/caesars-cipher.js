/**
 * Decodes an uppercase ROT13 encoded string.
 * 
 * @param {*} str 
 * @returns 
 */
export function rot13(str) {
    str = str.toUpperCase();

    let decrypted = "";

    for (let index = 0; index < str.length; index++) {
        let cipher = str[index];
        if (cipher.match(/[A-Z]/i)) {
            cipher = String.fromCharCode(str.charCodeAt(index) % 26 + 65);
        }
        decrypted = decrypted.concat(cipher);
    }
    
    return decrypted;
}
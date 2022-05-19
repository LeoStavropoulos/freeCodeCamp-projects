/**
 * Decodes an uppercase ROT13 encoded string.
 * 
 * @param {*} str 
 * @returns 
 */
function rot13(str) {
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


//TEST DATA
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
export function telephoneCheck(str) {
    //phone number valid formats
    let regex = /(^1( \d{3}( |\-)\d{3}( |\-)\d{4}|[ ]?\(\d{3}\)[ ]?\d{3}\-\d{4})|^(\d{10}|\d{3}( |\-)\d{3}( |\-)\d{4}|[ ]?\(\d{3}\)[ ]?\d{3}\-\d{4}))$/;

    return regex.test(str);
}
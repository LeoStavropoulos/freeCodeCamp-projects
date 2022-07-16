export function palindrome(str) {
    
    str = str.toUpperCase();
    str = str.replace(/[^0-9a-z]/gi, '');
    console.log(str)
    

    for (let index = 0; index < str.length / 2; index++) {
        if (str.charAt(index) !== str.charAt(str.length - 1 - index)) {
           return false 
        }
    }

    return true;
}
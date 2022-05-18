function palindrome(str) {
    
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

//Should return true.
console.log(palindrome("race car"))
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("eye"))
console.log(palindrome("_eye"))
console.log(palindrome("never odd or even"))
console.log(palindrome("My age is 0, 0 si ega ym."))
console.log(palindrome("0_0 (: /-\ :) 0-0"))

//Should return false/
console.log(palindrome("1 eye for of 1 eye."))
console.log(palindrome("almostomla"))
console.log(palindrome("nope"))
console.log(palindrome("not a palindrome"))
console.log(palindrome("five|\_/|four"))

function telephoneCheck(str) {
    //phone number valid formats
    let regex = /(^1( \d{3}( |\-)\d{3}( |\-)\d{4}|[ ]?\(\d{3}\)[ ]?\d{3}\-\d{4})|^(\d{10}|\d{3}( |\-)\d{3}( |\-)\d{4}|[ ]?\(\d{3}\)[ ]?\d{3}\-\d{4}))$/;


    return regex.test(str);
}


//TEST DATA
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("1 456 789 4444"))
console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("1(555)555-5555"))
console.log("All outputs before this should be true")
console.log("--------------------------------------")
console.log("All outputs after this should be false")
console.log(telephoneCheck("55 55-55-555-5"))
console.log(telephoneCheck("11 555-555-5555"))
console.log(telephoneCheck("(555)5(55?)-5555"))
console.log(telephoneCheck("(555-555-5555"))
console.log(telephoneCheck("555)-555-5555"))
console.log(telephoneCheck("2(757)622-7382"))
console.log(telephoneCheck("2(757)6227382"))
console.log(telephoneCheck("(275)76227382"))
console.log(telephoneCheck("27576227382"))
console.log(telephoneCheck("10 (757) 622-7382"))
console.log(telephoneCheck("2 757 622-7382"))
console.log(telephoneCheck("-1 (757) 622-7382"))
console.log(telephoneCheck("0 (757) 622-7382"))
console.log(telephoneCheck("2 (757) 622-7382"))
console.log(telephoneCheck("(6054756961)"))
console.log(telephoneCheck("55555555"))
console.log(telephoneCheck("123**&!!asdf#"))
console.log(telephoneCheck("1 555)555-5555"))
console.log(telephoneCheck("5555555"))
console.log(telephoneCheck("555-5555"))
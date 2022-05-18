/**
 * Converts a number to roman numerals. It can get a number
 * up to 3_999_999.
 * 
 * @param {*} num 
 * @returns 
 */
function convertToRoman(num) {
    
    //analyzing number
    let millions = Math.floor(num / 1_000_000)
    num = num % 1_000_000
    let hundredThousands = Math.floor(num / 100_000)
    num = num % 100_000
    let tenThousands = Math.floor(num / 10_000)
    num = num % 10_000
    let thousands = Math.floor(num / 1000)
    num = num % 1000
    let hundreds = Math.floor(num / 100)
    num = num % 100
    let tens = Math.floor(num / 10)
    let ones = num % 10

    let romanNum = ""

    if(millions > 0) {
        for (let index = 0; index < millions; index++) {
            romanNum = romanNum.concat("M\u0304")
        }
    }
    
    switch (hundredThousands) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < hundredThousands; index++) {
                romanNum = romanNum.concat("C\u0304")
            }
            break;
        case 4:
            romanNum = romanNum.concat("C\u0304D\u0304")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("D\u0304")
            for (let index = 0; index < hundredThousands - 5; index++) {
                romanNum = romanNum.concat("C\u0304")
            }
            break;
        case 9:
            romanNum = romanNum.concat("C\u0304M\u0304")
            break;
        default:
            break;
    }

    switch (tenThousands) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < tenThousands; index++) {
                romanNum = romanNum.concat("X\u0304")
            }
            break;
        case 4:
            romanNum = romanNum.concat("X\u0304L\u0304")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("L\u0304")
            for (let index = 0; index < tenThousands - 5; index++) {
                romanNum = romanNum.concat("X\u0304")
            }
            break;
        case 9:
            romanNum = romanNum.concat("X\u0304C\u0304")
            break;
        default:
            break;
    }

    switch (thousands) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < thousands; index++) {
                romanNum = romanNum.concat("M")
            }
            break;
        case 4:
            romanNum = romanNum.concat("MV\u0304")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("V\u0304")
            for (let index = 0; index < thousands - 5; index++) {
                romanNum = romanNum.concat("M")
            }
            break;
        case 9:
            romanNum = romanNum.concat("MX\u0304")
            break;
        default:
            break;
    }

    switch (hundreds) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < hundreds; index++) {
                romanNum = romanNum.concat("C")
            }
            break;
        case 4:
            romanNum = romanNum.concat("CD")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("D")
            for (let index = 0; index < hundreds - 5; index++) {
                romanNum = romanNum.concat("C")
            }
            break;
        case 9:
            romanNum = romanNum.concat("CM")
            break;
        default:
            break;
    }

    switch (tens) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < tens; index++) {
                romanNum = romanNum.concat("X")
            }
            break;
        case 4:
            romanNum = romanNum.concat("XL")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("L")
            for (let index = 0; index < tens - 5; index++) {
                romanNum = romanNum.concat("X")
            }
            break;
        case 9:
            romanNum = romanNum.concat("XC")
            break;
        default:
            break;
    }

    switch (ones) {
        case 1:
        case 2:
        case 3:
            for (let index = 0; index < ones; index++) {
                romanNum = romanNum.concat("I")
            }
            break;
        case 4:
            romanNum = romanNum.concat("IV")
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNum =romanNum.concat("V")
            for (let index = 0; index < ones - 5; index++) {
                romanNum = romanNum.concat("I")
            }
            break;
        case 9:
            romanNum = romanNum.concat("IX")
            break;
        default:
            break;
    }

    return romanNum;
}

// TEST DATA
console.log(convertToRoman(2));
console.log("II");
console.log(convertToRoman(3));
console.log("III");
console.log(convertToRoman(4));
console.log("IV");
console.log(convertToRoman(5));
console.log("V");
console.log(convertToRoman(9));
console.log("IX");
console.log(convertToRoman(12));
console.log("XII");
console.log(convertToRoman(16));
console.log("XVI");
console.log(convertToRoman(29));
console.log("XXIX");
console.log(convertToRoman(44));
console.log("XLIV");
console.log(convertToRoman(45));
console.log("XLV");
console.log(convertToRoman(68));
console.log("LXVIII");
console.log(convertToRoman(83));
console.log("LXXXIII");
console.log(convertToRoman(97));
console.log("XCVII");
console.log(convertToRoman(99));
console.log("XCIX");
console.log(convertToRoman(400));
console.log("CD");
console.log(convertToRoman(500));
console.log("D");
console.log(convertToRoman(501));
console.log("DI");
console.log(convertToRoman(649));
console.log("DCXLIX");
console.log(convertToRoman(798));
console.log("DCCXCVIII");
console.log(convertToRoman(891));
console.log("DCCCXCI");
console.log(convertToRoman(1000));
console.log("M");
console.log(convertToRoman(1004));
console.log("MIV");
console.log(convertToRoman(1006));
console.log("MVI");
console.log(convertToRoman(1023));
console.log("MXXIII");
console.log(convertToRoman(2014));
console.log("MMXIV");
console.log(convertToRoman(3999));
console.log("MMMCMXCIX");
console.log(convertToRoman(2_869_993));
console.log("M\u0304M\u0304D\u0304C\u0304C\u0304C\u0304L\u0304X\u0304MX\u0304CMXCIII")
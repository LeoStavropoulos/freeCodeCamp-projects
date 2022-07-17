/**
 * Converts a number to roman numerals. It can get a number
 * up to 3_999_999.
 * 
 * @param {*} num 
 * @returns 
 */
export function convertToRoman(num) {
    
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
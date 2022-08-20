import "./Calculator.css"
import Display from "./components/Display";
import Button from "./components/Button";
import {useEffect, useState} from "react";

const Calculator = () => {
    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("");
    const [calcData, setCalcData] = useState("");

    const handleInput = (value) => {
        switch (value) {
            case "=":
                handleSubmit();
                break;
            case "AC":
                handleClear();
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                handleNumbers(parseInt(value));
                break;
            case ".":
                handleDotOperator();
                break;
            case "+":
            case "-":
            case "x":
            case "/":
                handleOperators(value);
                break;
            default:
                break;
        }
    }

    const handleOutput = () => {
        setOutput(calcData);
    }

    useEffect(() => {
        handleOutput()
    }, [calcData]);

    const handleSubmit = () => {
        const total = eval(calcData);
        setInput(`${total}`)
        setOutput(`${calcData}=${total}`)

        console.log(input)
        console.log(output)
        console.log(calcData)
        // setCalcData(`${total}`)
    }

    const handleClear = () => {
        setInput("0")
        setCalcData("")
    }

    const handleNumbers = (value) => {
        if (!calcData.length) {
            setInput(`${value}`);
            setCalcData(`${value}`);
            return;
        }

        if (value === 0 && (calcData === "0" || input === "0")) {
            setCalcData(`${calcData}`);
            return;
        }

        if (output.slice(-2,-1) === "=") {
            setInput(`${value}`)
            setCalcData(`${value}`)
            return;
        }

        const lastChar = calcData.slice(-1);
        const isLastCharOperator =
            lastChar === "*"|| lastChar === "x" || lastChar === "+" || lastChar === "-" || lastChar === "/";

        setInput(isLastCharOperator ? `${value}` : `${input}${value}`);
        setCalcData(`${calcData}${value}`);
    }

    const handleDotOperator = () => {
        const lastChar = calcData.slice(-1);
        const isLastCharOperator =
            lastChar === "*"|| lastChar === "x" || lastChar === "+" || lastChar === "-" || lastChar === "/";

        if (!calcData.length) {
            setInput("0.");
            setCalcData("0.");
            return;
        }

        if (isLastCharOperator) {
            setInput("0.");
            setCalcData(`${calcData} 0.`);
        } else {
            setInput(
                lastChar === "." || input.includes(".") ? `${input}` : `${input}.`
            );
        }

        const formattedValue =
            lastChar === "." || input.includes(".") ? `${calcData}` : `${calcData}.`;
        setCalcData(formattedValue);
    }

    const handleOperators = (value) => {
        if (calcData.length) {
            setInput(`${value}`);
            const beforeLastChar = calcData.slice(-2, -1);

            const beforeLastCharIsOperator =
                beforeLastChar === "*"|| beforeLastChar === "x" || beforeLastChar === "+" || beforeLastChar === "-" || beforeLastChar === "/";

            const lastChar = calcData.slice(-1);

            const lastCharIsOperator =
                lastChar === "*"|| lastChar === "x" || lastChar === "+" || lastChar === "-" || lastChar === "/";

            const validOp = value === "x" ? "*" : value;

            if(
                (lastCharIsOperator && value !== "-") ||
                beforeLastCharIsOperator && lastCharIsOperator
            ) {
                if (beforeLastCharIsOperator) {
                    const updatedValue =`${calcData.substring(0, calcData.length -2)}${value}`;
                    setCalcData(updatedValue)
                } else {
                    setCalcData(`${calcData.substring(0, calcData.length -1)}${validOp}`);
                }
            } else {
                setCalcData(`${calcData}${validOp}`)
            }
        }
    }

    return(
        <div className="calculator-container">
            <div className="calculator">
                <div className="calculator-grid">
                    <Display input={input} output={output}/>
                    <Button id="clear" class="calc-btn bg-red ac" symbol="AC" handleInput={handleInput}/>
                    <Button id="divide" class="calc-btn bg-lightgray" symbol="/" handleInput={handleInput}/>
                    <Button id="multiply" class="calc-btn bg-lightgray" symbol="x" handleInput={handleInput}/>
                    <Button id="seven" class="calc-btn" symbol="7" handleInput={handleInput}/>
                    <Button id="eight" class="calc-btn" symbol="8" handleInput={handleInput}/>
                    <Button id="nine" class="calc-btn" symbol="9" handleInput={handleInput}/>
                    <Button id="subtract" class="calc-btn bg-lightgray" symbol="-" handleInput={handleInput}/>
                    <Button id="four" class="calc-btn" symbol="4" handleInput={handleInput}/>
                    <Button id="five" class="calc-btn" symbol="5" handleInput={handleInput}/>
                    <Button id="six" class="calc-btn" symbol="6" handleInput={handleInput}/>
                    <Button id="add" class="calc-btn bg-lightgray" symbol="+" handleInput={handleInput}/>
                    <Button id="one" class="calc-btn" symbol="1" handleInput={handleInput}/>
                    <Button id="two" class="calc-btn" symbol="2" handleInput={handleInput}/>
                    <Button id="three" class="calc-btn" symbol="3" handleInput={handleInput}/>
                    <Button id="equals" class="calc-btn bg-blue equal" symbol="=" handleInput={handleInput}/>
                    <Button id="zero" class="calc-btn zero" symbol="0" handleInput={handleInput}/>
                    <Button id="decimal" class="calc-btn" symbol="." handleInput={handleInput}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator
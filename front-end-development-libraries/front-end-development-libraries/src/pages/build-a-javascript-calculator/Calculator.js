import "Calculator.css"
import Display from "./components/Display";

const Calculator = () => {
    return(
        <div className="calculator-container">
            <div className="calculator">
                <Display />
                <div className="calculator-buttons">

                </div>
            </div>
        </div>
    )
}

export default Calculator
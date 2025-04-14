import { useState } from "react";
import { evaluate } from "mathjs"; // Make sure mathjs is installed

export default function Buttons() {
    const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '00', '.', '/', 'ac', 'c'];
    const [btnNumber, setBtn] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'c') {
            setBtn(btnNumber.slice(0, -1)); // Remove last character
        } else if (value === 'ac') {
            setBtn(''); // Clear all
            setResult('');
        } else {
            setBtn(btnNumber + value); // Append number or operator
        }
    };

    const calculateResult = () => {
        try {
            const evalResult = evaluate(btnNumber);
            setResult(evalResult.toString());
        } catch (error) {
            setResult("Error");
            console.error("Invalid expression");
        }
    };

    const renderButton = (value) => {
        const isOperator = ['+', '-', '*', '/'].includes(value);
        return (
            <li key={value}>
                <button
                    onClick={() => handleButtonClick(value)}
                    className={isOperator ? 'operator' : ''}
                >
                    {value}
                </button>
            </li>
        );
    };

    const renderSquares = () => {
        return Array.from({ length: 8 }, (_, i) => <span key={i}></span>);
    };

    return (
        <div className="body">
            <section className="buttons container">
                <div className="title">
                    <h1>
                        <span>BLACK-BEAR</span>
                        <p>CALCULATOR</p>
                    </h1>
                    <div className="color">
                        {renderSquares()}
                    </div>
                </div>

                <div className="input-container">
                    <input
                        type="text"
                        value={btnNumber}
                        onChange={e => setBtn(e.target.value)}
                    />
                    <p>{result}</p>
                </div>

                <ul style={{ position: 'relative' }}>
                    {buttons.map(renderButton)}
                    <li className="equal">
                        <button onClick={calculateResult}>=</button>
                    </li>
                </ul>
            </section>
        </div>
    );
}

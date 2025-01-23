import { useState } from "react";
import { evaluate } from 'mathjs'; // Assuming mathjs is installed

export default function Buttons() {
    const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*',0,'00','.', '/', 'ac', 'c'];
    const [btnNumber, setBtn] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'c') {
            setBtn(''); // Clear all
            setResult('')
        } else if (value === 'ac') {
            setBtn(btnNumber.slice(0, -1)); // Remove last character
            // setResult(result.slice(0,-1))
        } else {
            setBtn(btnNumber + value); // Append number or operator
        }
    };

    const renderButton = (value) => {
        const isOperator = ['+', '-', '*', '/'].includes(value);
        return (
            <li key={value}>
                <button 
                    onClick={() => handleButtonClick(value)} 
                    className={isOperator ? 'operator' : ''} // Add className for operators
                >
                    {value}
                </button>
            </li>
        );
    };
    function squares() {
        return Array.from({ length: 8 }, (_, i) => <span key={i}></span>);
    }

    return (
        <div className="body">
        <section className="buttons container">
        <div className="title">
            <h1>
            <span>BLACK-BEAR</span>
            <p>CALCULATOR</p>
            </h1>
            <div className="color">
                {squares()}
            </div>
        </div>
        <div className="input-container">
            <input type="text" 
                value={btnNumber} 
                onChange={e => setBtn(e.target.value)} 
                // style={{ width: "100%", position: "absolute", top: "0",height:'50px' }} 
                />
                
            <p>{result}</p>

        </div>
            
            <ul style={{ position: 'relative' }}>
                {buttons.map(renderButton)}
                
                <li className="equal" >
                    <button onClick={() => {
                        try {
                            
                            setResult(evaluate(btnNumber));
                            // setRe/sult(btnNumber)
                        } catch (error) {
                            console.error("Invalid expression");
                        }
                    }}>=</button>
                </li>
            </ul>
        </section></div>
    );
}

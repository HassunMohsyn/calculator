import { useState } from "react";
import { evaluate } from 'mathjs'; // Assuming mathjs is installed

export default function Buttons() {
    const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*',0,'00','.', '/', 'ac', 'c'];
    const [btnNumber, setBtn] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'ac') {
            setBtn(''); // Clear all
        } else if (value === 'c') {
            setBtn(btnNumber.slice(0, -1)); // Remove last character
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

    return (
        <div className="body">
        <section className="buttons container">
            <input type="text" 
                value={btnNumber} 
                onChange={e => setBtn(e.target.value)} 
                // style={{ width: "100%", position: "absolute", top: "0",height:'50px' }} 
            />
            
            <ul style={{ position: 'relative' }}>
                {buttons.map(renderButton)}
                
                <li className="equal" >
                    <button onClick={() => {
                        try {
                            setBtn(evaluate(btnNumber));
                        } catch (error) {
                            console.error("Invalid expression");
                        }
                    }}>=</button>
                </li>
            </ul>
        </section></div>
    );
}

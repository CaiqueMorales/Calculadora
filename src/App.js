import React, { useState } from 'react';
import './app.css'

const App = () => {
        
    
    const [result, setResult] = useState('')

    function handleClick (props) {
        setResult(result.concat(props.target.value));
    }
    const clear = () => {
        setResult("");
    }
    const clearOne = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {

        try{
            // eslint-disable-next-line
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Error")
        }
    }
    

    return (

        <div className="container">

            <div>
                <input type="text" value={result} readOnly></input>
            </div>

            <div className="keypad">
            
                <button onClick={clear} id="clear" className="highlight">Limpar</button>
                <button onClick={clearOne} id="clearOne" className="highlight">C</button>
                <button onClick={handleClick} value="/" className="highlight">&divide;</button>
                <button onClick={handleClick} value="7">7</button>
                <button onClick={handleClick} value="8">8</button>
                <button onClick={handleClick} value="9">9</button>
                <button onClick={handleClick} value="*" className="highlight">&times;</button>
                <button onClick={handleClick} value="4">4</button>
                <button onClick={handleClick} value="5">5</button>
                <button onClick={handleClick} value="6">6</button>
                <button onClick={handleClick} value="-" className="highlight">-</button>
                <button onClick={handleClick} value="1">1</button>
                <button onClick={handleClick} value="2">2</button>
                <button onClick={handleClick} value="3">3</button>
                <button onClick={handleClick} value="+" className="highlight">+</button>
                <button onClick={handleClick} value=".">.</button>
                <button onClick={handleClick} value="0">0</button>
                <button onClick={calculate} value ="=" id="equal" className="highlight"> = </button>


            </div>

        </div>
    );
}

export default App;
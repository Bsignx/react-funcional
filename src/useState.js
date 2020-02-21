import React, { useState } from 'react';


function App() {

    const [numero, setNumero] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [result, setResult] = useState(0);

    const somar = () => {
        setResult(
            numero + numero2
        )
    };

   

    return (
        <>
            <input type="text" value={numero}
                onChange={(e) => setNumero(+e.target.value)} />
            <input type="text" value={numero2}
                onChange={(e) => setNumero2(+e.target.value)} />
            <input type="text" value={result} />
            <button onClick={somar}>Somar</button>
        </>
    );
}

export default App;

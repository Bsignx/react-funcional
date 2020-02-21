import  React,{ useState } from 'react';
import  useStore from "./somarNumeros";


function ReducerHook() {

  const [ numero, setNumero ] = useState(0);
  const [ numero2, setNumero2 ] = useState(0);

  const [store, dispatch] = useStore();

  const somar = () => {
    dispatch({
      type: 'SOMA',
      payload: numero + numero2,
    })
  }

  const subtrair = () => {
    dispatch({
      type: 'SUBTRAIR',
      payload: numero - numero2,
    })
  }

 

  return (
    <>
     <input type="text" value={numero}
     onChange={ (e) => setNumero(+e.target.value)}/>
     <input type="text" value={numero2}
     onChange={ (e) => setNumero2(+e.target.value)}/>
     <input type="text" value={store.resultado} readOnly/>
     <button onClick={somar}>Somar</button>
     <button onClick={subtrair}>Subtrair</button>
    </>
  );
}

export default ReducerHook;

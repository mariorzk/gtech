import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const boasVindas = () => {
    alert("Esse alert é para aparecer somente uma vez!!")
  }
  useEffect(() => {
    console.log("Use Effect foi chamado!");   
  })
  useEffect(() => {
    boasVindas();
    console.log("Use Effect que só chama uma vez");   
  },[])
  useEffect(() => {
    console.log("Use Effect que só chama se clicar no primeiro contador!!");   
  },[count])
  return ( 
    <>
    <h1>Olá Mundo!!</h1>
    <p>Contador: {count}</p>
    <button onClick={() => setCount(count + 1)}>Incrementar</button>
    <p>Contador: {count2}</p>
    <button onClick={() => setCount2(count2 + 1)}>Incrementar</button>
    </>
   );
  } 
export default App;
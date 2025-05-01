import { useRef } from "react";

const Input = () => {
    const nome = useRef("")
    return ( 
        <div>
            <input 
            type="text" 
            placeholder="Digite seu nome"
            // onChange={(e) => nome.current = e.target.value}
            ref={nome}
            />
            <button onClick={() => console.log(nome.current.value)
            }>Mostrar Nome:</button>
            <h1>{nome.current.value}</h1>
        </div>
     );
}
 
export default Input;
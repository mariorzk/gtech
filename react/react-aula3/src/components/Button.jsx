import { useState } from "react"

const Button = () => {
    const [contador, setContador] = useState(0)

    return ( 
        <button onClick={() => setContador(contador + 1)}>Clique em mim! {contador}</button>
    );
}

 
export default Button;
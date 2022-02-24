import Layout from "../components/Layout";
import { useState } from "react";

//a função incrementa soma +1 a cada clique do botão, mas isso não reflete na interface gráfica
//para que a mudança seja refletida na interface gráfica é preciso trabalhar com estados.
//não usamos props aqui pois ele é uma propriedade de somente leitura
export default function Estado(){
    const [numero,setNumero] = useState(0) // React hooks

    function incrementar(){
        setNumero(numero + 1)
        
    }

    return(
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
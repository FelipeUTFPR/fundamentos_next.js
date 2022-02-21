import Cabecalho from "../components/Cabecalho";

export default function Exemplo(){
    return(
        //pra retornar mais de um componente preciso envolver os elementos em divs ou em reacts fragments
        //usando o react Fragments, tag fazia, o componente não terá nenhuma tag adicional
        <>
            <Cabecalho/>
            <Cabecalho/>
        </>
    )
}
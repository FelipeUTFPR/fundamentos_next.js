export default function Cabecalho(props){
    //as props não podem ser modificadas, é um objeto somente de leitura!!
    return(
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}